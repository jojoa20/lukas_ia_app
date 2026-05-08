FROM python:3.11-slim

# Set environment variables for Python
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PIP_NO_CACHE_DIR=1

WORKDIR /app

# Install system dependencies required by Playwright
RUN apt-get update && apt-get install -y --no-install-recommends \
    wget gnupg curl \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements file and install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Install Playwright browsers and their OS dependencies
RUN playwright install chromium --with-deps

# Copy the scraper script
COPY scraper_market.py .

# Command to run the scraper
CMD ["python", "scraper_market.py"]
