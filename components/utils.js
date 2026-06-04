"use client";

import { useRouter } from "next/navigation";
import { BF } from "./data";

export function useBFRouter() {
  const router = useRouter();

  const go = (page, params = {}) => {
    let path = "/";
    if (page === "service" && params.serviceId) {
      const s = BF.services.find((x) => x.id === params.serviceId);
      if (s) path = s.url;
    } else if (page === "contact" && params.trial) {
      path = "/take-free-trial";
    } else if (page === "trial") {
      path = "/take-free-trial";
    } else if (page === "legal" && params.doc) {
      if (params.doc === "privacy") path = "/privacy-policy";
      if (params.doc === "terms") path = "/terms-and-conditions";
      if (params.doc === "cookies") path = "/cookies-policy";
    } else {
      const routeMap = {
        home: "/",
        about: "/image-post-production-company-our-company",
        services: "/image-post-production-service",
        gallery: "/gallery",
        contact: "/contact-info",
        faq: "/frequently-asked-questions"
      };
      path = routeMap[page] || "/";
    }
    
    if (params.hash) {
      path += "#" + params.hash;
    }

    router.push(path);
  };

  return { go };
}
