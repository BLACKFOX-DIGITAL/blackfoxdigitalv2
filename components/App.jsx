/* App — hash router on the real site URLs, scroll reveal, tweaks */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#EE3A39",
  "headline": "Saira Condensed",
  "showStamp": true,
  "roundShowcase": true
}/*EDITMODE-END*/;

/* ---- Route table: real URL path  ->  { page, params } ---- */
const BF_ROUTES = (() => {
  const map = [
    { path: "/", page: "home" },
    { path: "/image-post-production-company-our-company", page: "about" },
    { path: "/image-post-production-service", page: "services" },
    { path: "/gallery", page: "gallery" },
    { path: "/contact-info", page: "contact" },
    { path: "/take-free-trial", page: "trial" },
    { path: "/frequently-asked-questions", page: "faq" },
    { path: "/privacy-policy", page: "legal", params: { doc: "privacy" } },
    { path: "/terms-and-conditions", page: "legal", params: { doc: "terms" } },
    { path: "/cookies-policy-of-blackfox-limited", page: "legal", params: { doc: "cookies" } },
  ];
  // service detail pages, keyed by their real URLs
  (window.BF.services || []).forEach((s) => {
    map.push({ path: s.url, page: "service", params: { serviceId: s.id } });
  });
  return map;
})();

function pathToRoute(path) {
  const clean = (path || "/").split("?")[0].replace(/\/+$/, "") || "/";
  const hit = BF_ROUTES.find((r) => r.path === clean);
  if (hit) return { page: hit.page, params: { ...(hit.params || {}) } };
  return { page: "home", params: {} };
}

function routeToPath(page, params = {}) {
  if (page === "service" && params.serviceId) {
    const s = (window.BF.services || []).find((x) => x.id === params.serviceId);
    if (s) return s.url;
  }
  if (page === "contact" && params.trial) return "/take-free-trial";
  if (page === "trial") return "/take-free-trial";
  if (page === "legal" && params.doc) {
    const found = BF_ROUTES.find((r) => r.page === "legal" && (r.params || {}).doc === params.doc);
    if (found) return found.path;
  }
  const hit = BF_ROUTES.find((r) => r.page === page && !r.params);
  return hit ? hit.path : "/";
}

function useReveal(dep) {
  React.useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal:not(.in)"));
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((ents) => {
      ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [dep]);
}

function readHash() {
  const h = window.location.hash.replace(/^#/, "");
  const r = pathToRoute(h || "/");
  // preserve a hash-section after a second '#': e.g. #/ + ... handled separately via state
  return r;
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = React.useState(() => readHash());
  const [section, setSection] = React.useState(null); // in-page anchor to scroll to

  // respond to hash changes (back/forward, direct links)
  React.useEffect(() => {
    const onHash = () => { setRoute(readHash()); };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = React.useCallback((page, params = {}) => {
    const { hash, ...rest } = params;
    const path = routeToPath(page, rest);
    setSection(hash || null);
    // setting the hash triggers hashchange -> setRoute
    const target = "#" + path;
    if (window.location.hash === target) {
      setRoute(pathToRoute(path)); // same path, force update for anchor
    } else {
      window.location.hash = path;
      setRoute(pathToRoute(path));
    }
  }, []);

  // scroll handling on route / section change
  React.useEffect(() => {
    if (section) {
      requestAnimationFrame(() => setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 92;
          window.scrollTo({ top: y, behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0 });
        }
        setSection(null);
      }, 70));
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [route, section]);

  // apply tweaks to :root
  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--red", t.accent);
    r.style.setProperty("--red-ink", t.accent);
    r.style.setProperty("--display", `"${t.headline}", "Arial Narrow", sans-serif`);
    document.body.classList.toggle("no-stamp", !t.showStamp);
    document.body.classList.toggle("flat-showcase", !t.roundShowcase);
  }, [t]);

  useReveal(route.page + JSON.stringify(route.params));

  const { page, params } = route;

  return (
    <React.Fragment>
      <Header go={go} page={page} params={params} />
      {page === "home"     && <Home go={go} />}
      {page === "about"    && <About go={go} />}
      {page === "services" && <ServicesOverview go={go} />}
      {page === "service"  && <ServicePage go={go} serviceId={params.serviceId} />}
      {page === "gallery"  && <Gallery go={go} />}
      {page === "faq"      && <FAQ go={go} />}
      {page === "legal"    && <Legal go={go} doc={params.doc} />}
      {page === "trial"    && <TrialPage go={go} service={params.service} />}
      {page === "contact"  && <Contact go={go} trial={params.trial} service={params.service} />}
      <Footer go={go} />

      <TweaksPanel>
        <TweakSection label="Brand" />
        <TweakColor label="Accent" value={t.accent}
          options={["#EE3A39", "#E8542A", "#C0392B", "#111111", "#2A6FDB", "#1F8A5B"]}
          onChange={(v) => setTweak("accent", v)} />
        <TweakSection label="Type" />
        <TweakSelect label="Headline font" value={t.headline}
          options={["Saira Condensed", "Archivo", "Oswald", "Anton"]}
          onChange={(v) => setTweak("headline", v)} />
        <TweakSection label="Details" />
        <TweakToggle label={'"Drag me" badge'} value={t.showStamp} onChange={(v) => setTweak("showStamp", v)} />
        <TweakToggle label="Rounded showcase" value={t.roundShowcase} onChange={(v) => setTweak("roundShowcase", v)} />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
