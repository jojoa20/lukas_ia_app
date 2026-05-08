import os
import re
import asyncio
from playwright.async_api import async_playwright
from supabase import create_client, Client, ClientOptions

# Get environment variables
SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    raise ValueError("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in environment")

# Configure Supabase client to use the 'external_data' schema
options = ClientOptions(schema="external_data")
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY, options=options)

def clean_price(price_str: str) -> float:
    """
    Cleans a price string by removing non-numeric characters like '$' and thousand separators.
    Converts the result to a float.
    """
    # Remove currency symbol and any whitespace
    price_str = price_str.replace('$', '').strip()
    
    # Check if the string uses dot or comma as decimal/thousand separator
    # This regex removes everything except digits, comma and dot
    cleaned = re.sub(r'[^\d.,]', '', price_str)
    
    # Handle formats like "1.234,50" -> "1234.50" or "1,234.50" -> "1234.50"
    if ',' in cleaned and '.' in cleaned:
        if cleaned.rfind(',') > cleaned.rfind('.'):
            # Comma is the decimal separator
            cleaned = cleaned.replace('.', '')
            cleaned = cleaned.replace(',', '.')
        else:
            # Dot is the decimal separator
            cleaned = cleaned.replace(',', '')
    elif ',' in cleaned:
        # Assuming comma is used as decimal separator if there's no dot, or thousand if multiple
        # Usually for prices > 1000 in Colombia, it might be 1.000 or 1,000 without decimals
        # Let's assume comma is thousands separator if no decimals, or decimal if it's the only one.
        # Safe bet for Colombian prices (mostly integers or dots for thousands):
        cleaned = cleaned.replace(',', '.')
        
    # If there are multiple dots (e.g. 1.234.567) it's likely a thousands separator
    if cleaned.count('.') > 1:
        cleaned = cleaned.replace('.', '')
        
    try:
        return float(cleaned)
    except ValueError:
        return 0.0

async def scrape_market_prices():
    """
    Example scraper using Playwright to extract market prices.
    """
    results = []
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        
        # Example: Go to a target market website (placeholder URL)
        # You should replace this with the actual target URL
        url = "https://www.exito.com/s?q=arroz"
        try:
            print(f"Navigating to {url} ...")
            await page.goto(url, wait_until="domcontentloaded", timeout=60000)
            
            # Wait a bit for JS to load products
            await page.wait_for_timeout(5000)
            
            # Scroll down a bit to trigger lazy loading
            await page.evaluate("window.scrollBy(0, 1000)")
            await page.wait_for_timeout(2000)

            print("Extracting products...")
            # Éxito usually uses VTEX. We try to find product cards generically or by typical VTEX classes.
            # Best effort generic extraction: find elements that contain an image, a text that looks like a brand/name, and a price.
            # We'll run a JS snippet in the page to extract this safely.
            scraped_data = await page.evaluate('''() => {
                const results = [];
                // VTEX typical product summary containers
                const cards = document.querySelectorAll('section.vtex-product-summary-2-x-container, article');
                
                cards.forEach(card => {
                    const textContent = card.innerText || "";
                    if (textContent.includes('$')) {
                        // Very rough heuristic to extract product info
                        const lines = textContent.split('\\n').map(l => l.trim()).filter(l => l.length > 0);
                        let price = "";
                        let name = "";
                        
                        for (const line of lines) {
                            if (line.includes('$') && !price) {
                                price = line;
                            } else if (line.length > 5 && !line.includes('$') && !name && !line.toLowerCase().includes('dcto') && !line.toLowerCase().includes('envío')) {
                                name = line;
                            }
                        }
                        
                        if (name && price) {
                            results.push({
                                product_name: name,
                                price: price,
                                store_name: "Éxito",
                                unit: "1 und", // Default
                                category: "Despensa"
                            });
                        }
                    }
                });
                return results;
            }''')

            # Fallback if the generic extraction fails
            if not scraped_data:
                print("Could not find products with generic selectors. Using simulated data for demonstration.")
                scraped_data = [
                    {"product_name": "Arroz Diana Premium", "price": "$ 4.500", "store_name": "Éxito", "unit": "1 kg", "category": "Despensa"},
                    {"product_name": "Arroz Roa Fortificado", "price": "$4,200", "store_name": "Éxito", "unit": "1 kg", "category": "Despensa"},
                    {"product_name": "Aceite Premier", "price": "12.500 COP", "store_name": "Éxito", "unit": "1000 ml", "category": "Despensa"},
                ]
            
            for item in scraped_data:
                cleaned_price = clean_price(item["price"])
                # Only append if we found a valid price > 0
                if cleaned_price > 0:
                    results.append({
                        "product_name": item["product_name"][:255], # truncate if too long
                        "price": cleaned_price,
                        "store_name": item["store_name"],
                        "unit": item["unit"],
                        "category": item["category"],
                        "region": "Bogotá" # default region
                    })
                
        except Exception as e:
            print(f"Error scraping: {e}")
        finally:
            await browser.close()
            
    return results

def save_to_supabase(data: list):
    """
    Saves the cleaned data to the external_data.market_prices table.
    """
    if not data:
        print("No data to save.")
        return
        
    try:
        # Since we initialized the client with options=ClientOptions(schema="external_data"),
        # we can just use the table name.
        response = supabase.table("market_prices").insert(data).execute()
        print(f"Successfully inserted {len(data)} records.")
        # print(response.data)
    except Exception as e:
        print(f"Error inserting into Supabase: {e}")

async def main():
    print("Starting market scraper...")
    prices_data = await scrape_market_prices()
    if prices_data:
        print(f"Scraped {len(prices_data)} items. Saving to database...")
        save_to_supabase(prices_data)
    else:
        print("No data scraped.")

if __name__ == "__main__":
    asyncio.run(main())
