const cheerio = require('cheerio');
fetch('https://trends24.in/colombia/', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  }
})
.then(r => r.text())
.then(html => {
  const $ = cheerio.load(html);
  const desc = $('meta[name="description"]').attr('content');
  console.log("Desc:", desc);
  const match = desc.match(/Colombia:\s*(.*?)\.\s*Explore/);
  if (match) {
    const trends = match[1].split(',').map(t => t.trim());
    console.log("Trends:", trends);
  }
});
