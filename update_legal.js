const fs = require('fs');
const cheerio = require('cheerio');

const privacyPath = '/Users/shakkhor666/.gemini/antigravity-ide/brain/74801716-6605-4262-bc96-b98b89312e85/.system_generated/steps/267/content.md';
const termsPath = '/Users/shakkhor666/.gemini/antigravity-ide/brain/74801716-6605-4262-bc96-b98b89312e85/.system_generated/steps/268/content.md';
const cookiesPath = '/Users/shakkhor666/.gemini/antigravity-ide/brain/74801716-6605-4262-bc96-b98b89312e85/.system_generated/steps/285/content.md';
const aboutPath = '/Users/shakkhor666/.gemini/antigravity-ide/brain/74801716-6605-4262-bc96-b98b89312e85/.system_generated/steps/266/content.md';

function parseLegal(htmlPath) {
  const content = fs.readFileSync(htmlPath, 'utf8');
  const htmlStart = content.indexOf('<!DOCTYPE html>');
  if (htmlStart === -1) return null;
  const html = content.substring(htmlStart);
  
  const $ = cheerio.load(html);
  const blocks = [];
  
  $('main section').each((i, el) => {
    const h2 = $(el).find('h2').text().trim();
    if (h2) {
      blocks.push({ t: 'h', x: h2 });
      $(el).find('p, ul > li').each((j, pEl) => {
        const pText = $(pEl).text().trim().replace(/\s+/g, ' ');
        if (pText.length > 20) { // filter out small UI strings
          blocks.push({ t: 'p', x: pText });
        }
      });
    }
  });
  
  const h1 = $('h1').first().text().trim();
  const intro = $('h1').first().next('p').text().trim() || $('h1').first().parent().find('p').first().text().trim();
  
  return {
    title: h1,
    intro: intro,
    updated: "Effective: May 2026",
    blocks: blocks
  };
}

const privacy = parseLegal(privacyPath);
const terms = parseLegal(termsPath);
const cookies = parseLegal(cookiesPath);

// filter out any empty or irrelevant blocks (e.g. if h2 was some unrelated UI)
function cleanBlocks(b) {
    let clean = [];
    for(let block of b) {
        if(block.t === 'h') {
            // ignore navigation headers
            if(block.x.includes("Section") && block.x.length < 15) continue;
            clean.push(block);
        } else {
            clean.push(block);
        }
    }
    return clean;
}

privacy.blocks = cleanBlocks(privacy.blocks);
terms.blocks = cleanBlocks(terms.blocks);
cookies.blocks = cleanBlocks(cookies.blocks);

const legalContentStr = `/* Legal page content \u2014 synced from theblackfoxstudio.com */
export const LEGAL = {
  privacy: ${JSON.stringify(privacy, null, 2)},
  terms: ${JSON.stringify(terms, null, 2)},
  cookies: ${JSON.stringify(cookies, null, 2)}
};
`;

fs.writeFileSync('components/legal-content.js', legalContentStr);

console.log("Updated components/legal-content.js");

// ABOUT PAGE PARSING
const aboutContent = fs.readFileSync(aboutPath, 'utf8');
const aboutHtmlStart = aboutContent.indexOf('<!DOCTYPE html>');
const $a = cheerio.load(aboutContent.substring(aboutHtmlStart));

let aboutBlocks = [];
$a('main p').each((j, pEl) => {
  const text = $a(pEl).text().trim().replace(/\s+/g, ' ');
  if (text.length > 100 && !text.includes('80+ specialist editors')) {
    if (!aboutBlocks.includes(text)) {
      aboutBlocks.push(text);
    }
  }
});

console.log("About blocks extracted:", aboutBlocks);

// now read data.js and replace the about.story array
let dataJs = fs.readFileSync('components/data.js', 'utf8');
const aboutRegex = /(about:\s*\{\s*story:\s*\[)[\s\S]*?(\],\s*bulletes:)/;

if (aboutBlocks.length > 0) {
  const newStory = aboutBlocks.map(b => `      ${JSON.stringify(b)}`).join(',\n');
  dataJs = dataJs.replace(aboutRegex, `$1\n${newStory}\n    $2`);
  fs.writeFileSync('components/data.js', dataJs);
  console.log("Updated components/data.js with new About story");
}

