export default function sitemap() {
  const base = 'https://blackfoxdigital.com.bd';
  const lastModified = new Date('2026-06-07');

  const staticPages = [
    '',
    '/background-removal-clippingpath-service',
    '/e-commerce-edit',
    '/ghost-mannequin',
    '/beauty-skin',
    '/jewelry-retouch',
    '/shadow-reflection-services',
    '/image-masking-service',
    '/product-retouch',
    '/model-retouch',
    '/image-post-production-service',
    '/gallery',
    '/pricing',
    '/frequently-asked-questions',
    '/take-free-trial',
    '/image-post-production-company-our-company',
    '/contact-info',
  ];

  return staticPages.map((path) => ({
    url: `${base}${path}`,
    lastModified,
  }));
}
