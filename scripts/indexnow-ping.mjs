// Run after deploy: node scripts/indexnow-ping.mjs
// Notifies Bing, Yandex, Naver of all URLs via IndexNow protocol

const KEY = '99e013890538447481215a8a70cf7f1d';
const HOST = 'blackfoxdigital.com.bd';
const BASE = `https://${HOST}`;

const urls = [
  `${BASE}/`,
  `${BASE}/background-removal-clippingpath-service`,
  `${BASE}/e-commerce-edit`,
  `${BASE}/ghost-mannequin`,
  `${BASE}/beauty-skin`,
  `${BASE}/jewelry-retouch`,
  `${BASE}/shadow-reflection-services`,
  `${BASE}/image-masking-service`,
  `${BASE}/product-retouch`,
  `${BASE}/model-retouch`,
  `${BASE}/image-post-production-service`,
  `${BASE}/gallery`,
  `${BASE}/pricing`,
  `${BASE}/frequently-asked-questions`,
  `${BASE}/take-free-trial`,
  `${BASE}/image-post-production-company-our-company`,
  `${BASE}/contact-info`,
];

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: `${BASE}/${KEY}.txt`,
  urlList: urls,
};

const endpoint = 'https://api.indexnow.org/indexnow';

const res = await fetch(endpoint, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});

console.log(`IndexNow ping: ${res.status} ${res.statusText}`);
if (res.status === 200) {
  console.log(`✅ Submitted ${urls.length} URLs to Bing/Yandex/Naver`);
} else {
  const body = await res.text();
  console.log('Response:', body);
}
