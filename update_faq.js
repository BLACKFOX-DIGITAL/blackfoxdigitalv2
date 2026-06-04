const fs = require('fs');

const faqs = [
  {
    "q": "How fast can you process 1,000+ e-commerce images?",
    "a": "For orders up to 1,000 images, we guarantee a 24-hour turnaround. For larger enterprise catalogs, we scale our team to maintain consistent daily deliveries."
  },
  {
    "q": "Do you offer a free trial for new clients?",
    "a": "Yes, we offer up to 5 images free of charge so you can evaluate our pixel-perfect quality before committing to a volume order."
  },
  {
    "q": "Do your edits meet Amazon and eBay image requirements?",
    "a": "Absolutely. We are experts in marketplace compliance. We deliver pure white backgrounds (RGB 255,255,255) and precise margins required by Amazon FBA and eBay."
  },
  {
    "q": "Can I get a discount for high-volume orders?",
    "a": "Yes. We offer tiered pricing for agencies and high-volume e-commerce brands. The more you process, the lower your per-image cost becomes."
  },
  {
    "q": "What's your revision policy?",
    "a": "We offer 100% satisfaction guarantee with unlimited free revisions within 14 days of delivery. We aren't happy until your catalog is perfect."
  }
];

let dataJs = fs.readFileSync('components/data.js', 'utf8');
const faqRegex = /(faq:\s*\[)[\s\S]*?(\],)/;

const newFaqsStr = faqs.map(f => `    { q: ${JSON.stringify(f.q)}, a: ${JSON.stringify(f.a)} }`).join(',\n');
dataJs = dataJs.replace(faqRegex, `$1\n${newFaqsStr}\n  $2`);

fs.writeFileSync('components/data.js', dataJs);
console.log("Updated FAQs in components/data.js directly!");
