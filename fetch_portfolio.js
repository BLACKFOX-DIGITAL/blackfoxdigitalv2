const fs = require('fs');
const https = require('https');
const path = require('path');
const cheerio = require('cheerio');

const htmlContent = fs.readFileSync('/Users/shakkhor666/.gemini/antigravity-ide/brain/74801716-6605-4262-bc96-b98b89312e85/.system_generated/steps/1221/content.md', 'utf8');
const $ = cheerio.load(htmlContent);

const pairs = [];
const categories = {};
let imgCount = 0;

const publicDir = '/Users/shakkhor666/Antigravity/blackfoxdigitalv2/public';

// Find all before/after containers
$('div.relative.w-full.aspect-square').each((i, el) => {
  const categoryLabel = $(el).find('div.absolute.top-4.right-4').text().trim();
  const imgs = $(el).find('img');
  if (imgs.length >= 2) {
    const afterImg = $(imgs[0]).attr('src');
    const beforeImg = $(imgs[1]).attr('src');
    
    // Extract base name
    const afterName = path.basename(afterImg);
    const beforeName = path.basename(beforeImg);
    
    const pairId = `port_${imgCount++}`;
    pairs.push({
      id: pairId,
      beforeUrl: `https://theblackfoxstudio.com${beforeImg}`,
      afterUrl: `https://theblackfoxstudio.com${afterImg}`,
      beforeName,
      afterName,
      category: categoryLabel
    });
    
    if (!categories[categoryLabel]) categories[categoryLabel] = [];
    categories[categoryLabel].push(pairId);
  }
});

console.log(`Found ${pairs.length} image pairs across ${Object.keys(categories).length} categories.`);

async function downloadImage(url, filename) {
  const dest = path.join(publicDir, filename);
  if (fs.existsSync(dest)) {
    console.log(`Exists: ${filename}`);
    return Promise.resolve();
  }
  
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      } else {
        console.error(`Failed to download ${url}: ${response.statusCode}`);
        resolve(); // Continue anyway
      }
    }).on('error', (err) => {
      console.error(`Error downloading ${url}:`, err.message);
      resolve();
    });
  });
}

async function run() {
  for (const pair of pairs) {
    await downloadImage(pair.beforeUrl, pair.beforeName);
    await downloadImage(pair.afterUrl, pair.afterName);
  }
  
  // Output JS structure
  let jsOutput = `\n// EXTRACTED PORTFOLIO PAIRS\nconst portfolioPairs = {\n`;
  pairs.forEach(p => {
    jsOutput += `  ${p.id}: { before: "/${p.beforeName}", after: "/${p.afterName}" },\n`;
  });
  jsOutput += `};\n\n`;
  
  jsOutput += `// EXTRACTED PORTFOLIO GALLERY CATEGORIES\nconst portfolioGallery = [\n`;
  for (const [cat, ids] of Object.entries(categories)) {
    jsOutput += `  { name: "${cat.replace(/ Service| Photo Editing| Retouching/gi, '')}", items: ${JSON.stringify(ids)} },\n`;
  }
  jsOutput += `];\n`;
  
  fs.writeFileSync('/Users/shakkhor666/Antigravity/blackfoxdigitalv2/extracted_data.txt', jsOutput);
  console.log('Extraction complete. See extracted_data.txt');
}

run();
