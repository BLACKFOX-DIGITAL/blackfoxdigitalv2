const fs = require('fs');

const dataFile = '/Users/shakkhor666/Antigravity/blackfoxdigitalv2/components/data.js';
let data = fs.readFileSync(dataFile, 'utf8');

const extracted = fs.readFileSync('/Users/shakkhor666/Antigravity/blackfoxdigitalv2/extracted_data.txt', 'utf8');

// 1. Extract portfolioPairs string
const pairsMatch = extracted.match(/const portfolioPairs = \{([\s\S]*?)\};/);
const pairsContent = pairsMatch[1];

// 2. Insert into BF.pairs
data = data.replace(/(pairs: \{)/, `$1\n${pairsContent}`);

// 3. Extract portfolioGallery string
const galleryMatch = extracted.match(/const portfolioGallery = (\[[\s\S]*?\];)/);
const galleryContent = galleryMatch[1];

// 4. Replace BF.gallery
data = data.replace(/BF\.gallery = \[\s*[\s\S]*?\];/, `BF.gallery = ${galleryContent}`);

fs.writeFileSync(dataFile, data);
console.log('Updated data.js');
