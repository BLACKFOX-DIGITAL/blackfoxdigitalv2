/* Shared content for the BLACKFOX prototype — mirrors the real site's pages & URLs */
window.BF = {
  phone:  "(+88) 019 24 482 868",
  phone2: "(+88) 018 41 482 868",
  email:  "info@blackfoxdigital.com.bd",
  addresses: [
    { country: "Bangladesh", phone: "(+88) 019 24 482 868", lines: ["House 560, Road 08", "Adabor, Dhaka 1207"] },
    { country: "Australia",  phone: "(+61) 414 045 232",    lines: ["8 Sax Pl", "MacGregor ACT 2615"] },
  ],

  // before/after pairs (file paths relative to project root)
  pairs: {
    beauty:   { before: "public/Beauty-Retouch-Service-Page.jpg", after: "public/Beauty-Retouch-Service-Page-Done.jpg" },
    beauty2:  { before: "public/Beauty-Retouch-1.jpg",            after: "public/Beauty-Retouch-Done-1.jpg" },
    color:    { before: "public/Color-Change.jpg",               after: "public/Color-Change-Done.jpg" },
    correct:  { before: "public/Color-Correction.jpg",           after: "public/Color-Correction-Done.jpg" },
    ecom:     { before: "public/ECommerce.jpg",                  after: "public/ECommerce-Done.jpg" },
    clip:     { before: "public/Clippingpath-1.jpg",             after: "public/Clippingpath-Done-1.jpg" },
    mannequin:{ before: "public/Ghost-Mannequin-2-Raw.jpg",      after: "public/Ghost-Mannequin-2-Done.jpg" },
    masking:  { before: "public/Masking-Retouch.jpg",            after: "public/Masking-Retouch-Done.jpg" },
    shadow:   { before: "public/Shadow-Service-Page.jpg",        after: "public/Shadow-Service-Page-Done.jpg" },
    model:    { before: "public/Model-Retouch-1.jpg",            after: "public/Model-Retouch-1-Done.jpg" },
    product:  { before: "public/Product-Retouch-Service-Page.jpg", after: "public/Product-Retouch-Service-Page-Done.jpg" },
    jewelry:  { before: "public/Jewlery-Retouch-Service-Page.jpg", after: "public/Jewlery-Retouch-Service-Page-Done.jpg" },
  },

  // 9 services — ids + exact URLs from the live site
  services: [
    {
      id: "ecom", no: "01", short: "E-commerce Edit", name: "E-commerce\nImage Editing",
      url: "/e-commerce-edit", pair: "ecom", fit: "cover",
      blurb: "Marketplace-ready imagery — cropped, aligned, shadowed and spec-compliant at scale.",
      long: "E-commerce image editing makes a product look attractive to customers and helps them understand it broadly. BLACKFOX delivers it in a professional, marketplace-ready way — cropped, aligned, shadowed and consistent across thousands of SKUs.",
      features: [["Spec compliant", "Amazon, Shopify & eBay ready."], ["Batch consistency", "Uniform across the catalog."], ["Crop & align", "Centered, sized, shadowed."]],
    },
    {
      id: "clipping", no: "02", short: "Background Removal", name: "Background Removal\n& Clipping Path",
      url: "/background-removal-clippingpath-service", pair: "clip", fit: "contain",
      blurb: "Hand-drawn pen-tool paths for pixel-clean cut-outs and seamless background swaps.",
      long: "Background removal / clipping path cuts the background or unnecessary objects out of an image to improve focus on the product — one of the most popular services in the e-commerce and photography industries. Every path is hand-traced with the pen tool, never auto-select.",
      features: [["Single & multi-path", "Simple cut-outs to complex paths."], ["True hand-tracing", "Pen-tool precision, no auto-select."], ["Any background", "Transparent, white or a full swap."]],
    },
    {
      id: "mannequin", no: "03", short: "Ghost Mannequin", name: "Ghost\nMannequin",
      url: "/ghost-mannequin", pair: "mannequin", fit: "contain",
      blurb: "Invisible-mannequin compositing that gives apparel a clean, 3-D hollow form.",
      long: "Removing the mannequin or model is a great way of displaying apparel. Ghost mannequin compositing eliminates the mannequin to give a more three-dimensional effect, removing creases and imperfections and increasing focus on your product.",
      features: [["Neck joints", "Clean inside-label composites."], ["3-D hollow form", "Apparel with realistic volume."], ["Symmetry fix", "Aligned, balanced garments."]],
    },
    {
      id: "masking", no: "04", short: "Image Masking", name: "Image\nMasking",
      url: "/image-masking-service", pair: "masking", fit: "cover",
      blurb: "Hair, fur and translucency handled with alpha & channel masking — no lost detail.",
      long: "Image masking reveals the subject and hides unwanted portions of a photo. Usually used on hairy or furry images to remove the background while keeping the hair or fur, our designers have authentic experience across every kind of masking.",
      features: [["Hair & fur", "Strand-level detail retained."], ["Alpha + channel", "The right technique per image."], ["Glass & smoke", "Translucency kept intact."]],
    },
    {
      id: "shadow", no: "05", short: "Shadow & Reflection", name: "Shadow &\nReflection",
      url: "/shadow-reflection-services", pair: "shadow", fit: "contain",
      blurb: "Natural, drop and mirror shadows that ground products without a studio reshoot.",
      long: "After the background is removed, shadows make an image look realistic again. Various types of shadow and reflection make products eye-catching and attractive — BLACKFOX specializes in making products look real and grounded.",
      features: [["Natural shadow", "As if shot in studio."], ["Reflection", "Mirror & floor reflections."], ["Drop shadow", "Lift products off the page."]],
    },
    {
      id: "beauty", no: "06", short: "Beauty & Skin", name: "Beauty &\nSkin Retouch",
      url: "/beauty-skin", pair: "beauty", fit: "cover",
      blurb: "Frequency-separation retouching that keeps skin texture natural and editorial.",
      long: "Beauty and skin retouch is all about the minor details — removing blemishes, distractions and inconsistencies and smoothing the skin to bring out the features that make a face stand out, while keeping texture natural.",
      features: [["Natural texture", "Frequency separation, no plastic skin."], ["Blemish removal", "Spots and distractions gone."], ["Dodge & burn", "Sculpted light, editorial finish."]],
    },
    {
      id: "model", no: "07", short: "Model Retouch", name: "Model\nRetouch",
      url: "/model-retouch", pair: "model", fit: "cover",
      blurb: "Glamour and high-end retouching for fashion, beauty and campaign work.",
      long: "Model retouch is all about making the model stand out — removing wrinkles, red-eye and distractions and smoothing skin tone to bring out the features that set them apart, tuned to your brand's editorial standard.",
      features: [["Skin & hair", "Editorial-grade retouch."], ["Body contour", "Subtle, respectful shaping."], ["Color grade", "On-brand final look."]],
    },
    {
      id: "product", no: "08", short: "Product Retouch", name: "Product\nRetouch",
      url: "/product-retouch", pair: "product", fit: "contain",
      blurb: "Clean, pleasant product imagery that attracts shoppers and converts.",
      long: "People increasingly buy from e-commerce shops based on product images, so they're critical to sales. Product retouch makes images pleasant and attractive to convert consumers — BLACKFOX specializes in product retouching.",
      features: [["Clean-up", "Dust, scratches and spots removed."], ["Color accuracy", "True-to-life, brand-matched."], ["Crisp finish", "Sharp, even, catalog-ready."]],
    },
    {
      id: "jewelry", no: "09", short: "Jewelry Retouch", name: "Jewelry\nRetouch",
      url: "/jewelry-retouch", pair: "jewelry", fit: "contain",
      blurb: "Sparkle enhancement, dust removal and metal/gemstone clean-up for fine detail.",
      long: "Jewelry is one of the more expensive items customers buy, so accuracy matters. We remove dust and scratches, adjust color and make pieces shine like they do when you see them face to face.",
      features: [["Sparkle boost", "Gemstone clarity and shine."], ["Dust removal", "Spotless metal surfaces."], ["Reflection clean", "Tidy, controlled highlights."]],
    },
  ],

  // hero quick-access services (matches the live site's hero icon grid)
  heroQuick: [
    { id: "clipping",  icon: "clipping",  label: "Clipping Path" },
    { id: "masking",   icon: "masking",   label: "Masking" },
    { id: "mannequin", icon: "mannequin", label: "Ghost Mannequin" },
    { id: "model",     icon: "retouch",   label: "Retouching" },
    { id: "beauty",    icon: "color",     label: "Color Correction" },
    { id: "ecom",      icon: "ecom",      label: "E-commerce Edit" },
  ],

  // gallery of before/after compare cards — the live site's "OUR SERVICES" grid
  serviceGallery: [
    { title: "E-commerce Photo Edit",      before: "public/ECommerce.jpg",                   after: "public/ECommerce-Done.jpg",                   fit: "cover",   sid: "ecom" },
    { title: "Background Removal",          before: "public/bg-removal.jpg",                  after: "public/bg-removal-done.jpg",                  fit: "contain", sid: "clipping" },
    { title: "Ghost Mannequin",             before: "public/Ghost-Mannequin-2-Raw.jpg",       after: "public/Ghost-Mannequin-2-Done.jpg",           fit: "contain", sid: "mannequin" },
    { title: "Beauty / Skin Retouch",       before: "public/Beauty-Retouch-Service-Page.jpg", after: "public/Beauty-Retouch-Service-Page-Done.jpg", fit: "cover",   sid: "beauty" },
    { title: "Flatlay Retouch",             before: "public/Flatlay-1.jpg",                   after: "public/Flatlay-1-Done.jpg",                   fit: "contain", sid: "product" },
    { title: "Masking",                     before: "public/Masking-Retouch-Service-3.jpg",   after: "public/Masking-Retouch-Service-Done-3.jpg",   fit: "cover",   sid: "masking" },
    { title: "Shadow / Reflection",         before: "public/Reflection-Service.jpg",          after: "public/Reflection-Service-Done.jpg",          fit: "contain", sid: "shadow" },
    { title: "Image Manipulation",          before: "public/Image-Manipulation.jpg",          after: "public/Image-Manipulation-Done.jpg",          fit: "cover",   sid: "masking" },
    { title: "Model Retouch",               before: "public/Model-Retouch-1.jpg",             after: "public/Model-Retouch-1-Done.jpg",             fit: "cover",   sid: "model" },
    { title: "Color Manipulation",          before: "public/Color-Change.jpg",                after: "public/Color-Change-Done.jpg",                fit: "cover",   sid: "beauty" },
    { title: "Jewelry Retouch",             before: "public/Jewlery-Retouch-5.jpg",           after: "public/Jewlery-Retouch-5-Done.jpg",           fit: "contain", sid: "jewelry" },
    { title: "Product Retouch",             before: "public/Product-Retouch-Service-Page.jpg",after: "public/Product-Retouch-Service-Page-Done.jpg",fit: "contain", sid: "product" },
  ],

  promises: [
    { k: "01", icon: "quality",  t: "Quality Assurance", d: "Every file passes a dedicated three-step QC desk before it reaches you." },
    { k: "02", icon: "price",    t: "Affordable Price",  d: "Volume-friendly per-image rates with no setup fees or surprises." },
    { k: "03", icon: "delivery", t: "On-Time Delivery",  d: "Same-day turnaround available — with hard deadlines we actually keep." },
    { k: "04", icon: "free",     t: "Free Trial",        d: "Send us two images and judge our quality before you commit a cent." },
    { k: "05", icon: "support",  t: "24×7 Support",      d: "A real human on Skype, WhatsApp or email, across every time zone." },
  ],

  workflow: [
    { k: "01", t: "Upload", d: "Clients upload their files to the FTP server, Dropbox or WeTransfer — whatever you already use." },
    { k: "02", t: "Edit", d: "We download the images and a dedicated team starts working on them to your instructions." },
    { k: "03", t: "QC", d: "Editing is done and the files are transferred to an independent quality-control desk." },
    { k: "04", t: "Transfer", d: "After QC, files are uploaded to the file transfer of your choice — FTP or Dropbox." },
    { k: "05", t: "Deliver", d: "Approved files are organised and ready for you to download and publish." },
  ],

  // "Feel the astonishing difference" section
  difference: {
    title: "Feel the astonishing difference",
    sub: "Retouch in a way that makes you stand out",
    body: [
      "We're here to retouch your raw images, turning your pictures into the best shots — so you stand out.",
      "Check out our edits across reflection, clipping & background removal, ghost mannequin, shadow, masking, product, beauty and jewelry retouch.",
    ],
    bulkPct: "20%",
    bulkLine: "On bulk orders",
    bulkBody: "Order more than 1,000 image edits at once and get up to 20% off the whole order.",
  },

  stats: [
    { n: "80+", l: "In-house designers" },
    { n: "2016", l: "Studio founded" },
    { n: "24-48h", l: "Typical turnaround" },
    { n: "3-step", l: "Quality control" },
  ],

  // About page copy (from the live site)
  about: {
    story: [
      "BLACKFOX DIGITAL started its journey in 2016 with a small team of 5 highly skilled graphic designers. Since its inception, Blackfox has worked long and hard to provide its clients with the best quality service there is.",
      "Our team is built from talented, skilled, creative, self-motivated and organized people from different backgrounds. This diversity helps us create new and exclusive content to satisfy — and sometimes exceed — our clients' expectations. We believe client support is as important as delivering timely, qualitative end-to-end solutions.",
      "Today we are a team of more than 80 designers, successfully providing clients with their post-production needs. Our goal is to provide the best quality-assured output for our clients, following their instructions, and we always appreciate feedback.",
      "When a buyer reaches us we first give a free trial to understand their desire. After a brief discussion, our team takes the best approach and completes the files within 24 to 48 hours, delivering on the desired deadline while ensuring quality through our 3-step quality-control process.",
      "We provide world-class professional photo editing focusing on Europe, the USA and Australia. Our clients are in the fashion industry, photography, brand stores and online stores — and we use up-to-date software including Adobe Photoshop CC and Illustrator to deliver the best output.",
    ],
    why: [
      "Our first priority is quality",
      "We provide 24/7 support to all our customers",
      "Our up-to-date infrastructure makes us your ideal back office",
      "We deliver on time. Always.",
      "Our servers are secure and encrypted for data transfer",
    ],
  },

  faq: [
    { q: "How can I make a comment about the service I received?", a: "We always welcome your feedback — whether you found our service friendly and helpful, or whether it fell short of your expectations. Please contact us with your comments and we'll respond as soon as possible." },
    { q: "Is there a limit on the number of images I can submit?", a: "No. You're free to submit as many images as you like. For test jobs we'll complete up to 3 images, and the rest after the test job is satisfactory and an agreement has been met." },
    { q: "What kind of images do you retouch?", a: "We provide professional retouching across beauty, ghost mannequin, jewelry, product, flat clothes, model, clipping / background removal, masking, shadow and reflection. Check our portfolio for more — we deliver high quality at affordable prices." },
    { q: "What are your usual delivery times?", a: "Our usual delivery time for basic jobs is 24 hours, depending on the number of images and retouching specifications. If you have a deadline, please mention it while submitting your order so we can meet it." },
    { q: "How will you guarantee my photos will be secure?", a: "Photos we receive are secured by a non-disclosure agreement, and our servers are encrypted so no information is leaked. Our policy is to delete all client photos within a week of receiving full payment, so you can be sure your photos are safe with us." },
    { q: "Do you have a priority delivery system?", a: "Yes, we offer priority deliveries. Depending on the normal deadline, charges for priority delivery can be an additional 50%–75% of the total order cost. Please note Sunday is an off day." },
    { q: "Do I have to pay for revisions?", a: "If we are responsible for not providing the photos as per specifications, revisions are done without any extra charge." },
    { q: "Is there a discount system?", a: "There are discounts in place for bulk orders. Every discount is different depending on the kind of bulk photos we receive — please contact us for more information." },
    { q: "Do you work on RAW images?", a: "Yes, we work on RAW images. RAW gives us the possibility to edit at a higher quality and achieve better results." },
    { q: "How will I reach you if I have any questions?", a: "You can reach us at any time via email, online chat, Skype or our site form." },
  ],
};

// Gallery categories — reuse available pairs
window.BF.gallery = [
  { name: "Clipping",   items: ["clip", "ecom", "product"] },
  { name: "Masking",    items: ["masking", "beauty2"] },
  { name: "Retouch",    items: ["beauty", "model", "beauty2"] },
  { name: "Color",      items: ["color", "correct"] },
  { name: "Shadow",     items: ["shadow", "ecom"] },
  { name: "Jewelry",    items: ["jewelry"] },
  { name: "Mannequin",  items: ["mannequin"] },
];
