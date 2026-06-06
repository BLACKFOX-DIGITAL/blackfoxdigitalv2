import { Gallery as GalleryComponent } from "@/components/Pages";

export const metadata = {
  title: "Before & After Gallery | BLACKFOX DIGITAL",
  description:
    "Browse before and after examples of our photo editing work: clipping path, ghost mannequin, masking, retouch, shadow, colour correction and more.",
  alternates: { canonical: "https://blackfoxdigital.com.bd/gallery" },
  openGraph: {
    title: "Before & After Gallery | BLACKFOX DIGITAL",
    description:
      "Browse before and after examples of our photo editing work: clipping path, ghost mannequin, masking, retouch, shadow and more.",
    url: "https://blackfoxdigital.com.bd/gallery",
    siteName: "BLACKFOX DIGITAL",
    images: [{ url: "/ecommerce-jacket-after.webp" }],
    type: "website",
  },
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": "https://blackfoxdigital.com.bd/gallery#gallery",
  url: "https://blackfoxdigital.com.bd/gallery",
  name: "Before & After Photo Editing Gallery",
  description: "Before and after examples of professional photo editing: clipping path, ghost mannequin, image masking, beauty retouch, shadow and product retouching.",
  author: { "@id": "https://blackfoxdigital.com.bd/#organization" },
  image: [
    { "@type": "ImageObject", url: "https://blackfoxdigital.com.bd/ecommerce-jacket-after.webp",              name: "E-commerce jacket — after editing",          description: "Jacket product image with white background, cropped and aligned to marketplace spec." },
    { "@type": "ImageObject", url: "https://blackfoxdigital.com.bd/bg-removal-hero-after.webp",               name: "Background removal — after editing",         description: "Clean background removal with pen-tool clipping path." },
    { "@type": "ImageObject", url: "https://blackfoxdigital.com.bd/ghost-mannequin-hero-after.webp",          name: "Ghost mannequin — after editing",            description: "Invisible mannequin compositing with neck joint stitch and 3-D hollow form." },
    { "@type": "ImageObject", url: "https://blackfoxdigital.com.bd/image-masking-hair-after.webp",            name: "Hair masking — after editing",               description: "Alpha channel hair masking with strand-level detail retained." },
    { "@type": "ImageObject", url: "https://blackfoxdigital.com.bd/shadow-reflection-hero-after.webp",        name: "Shadow & reflection — after editing",        description: "Natural drop shadow added to grounded product on white background." },
    { "@type": "ImageObject", url: "https://blackfoxdigital.com.bd/beauty-skin-retouch-after.webp",           name: "Beauty & skin retouch — after editing",      description: "Frequency-separation skin retouching with natural texture retained." },
    { "@type": "ImageObject", url: "https://blackfoxdigital.com.bd/product-retouch-electronics-after.webp",   name: "Product retouch — after editing",            description: "Electronics product retouching: dust removal, colour correction and crisp finish." },
    { "@type": "ImageObject", url: "https://blackfoxdigital.com.bd/clipping-path-espresso-after.webp",        name: "Clipping path — after editing",              description: "Complex clipping path on espresso machine with clean edges." },
    { "@type": "ImageObject", url: "https://blackfoxdigital.com.bd/Jewelry-Retouch-5-Done.webp",              name: "Jewelry retouch — after editing",            description: "Fine-detail jewelry retouching with sparkle enhancement and metal clean-up." },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",    item: "https://blackfoxdigital.com.bd" },
    { "@type": "ListItem", position: 2, name: "Gallery", item: "https://blackfoxdigital.com.bd/gallery" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GalleryComponent />
    </>
  );
}
