export default function robots() {
  return {
    rules: [
      { userAgent: "*",             allow: "/", disallow: ["/api/"] },
      { userAgent: "GPTBot",        allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User",  allow: "/" },
      { userAgent: "ClaudeBot",     allow: "/" },
      { userAgent: "anthropic-ai",  allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Bytespider",    allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "cohere-ai",     allow: "/" },
    ],
    sitemap: "https://blackfoxdigital.com.bd/sitemap.xml",
    host: "https://blackfoxdigital.com.bd",
  };
}
