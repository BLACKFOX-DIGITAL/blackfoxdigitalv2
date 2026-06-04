/* Inline line-icon set — functional UI icons in the brand style.
   Usage: <Icon name="clipping" /> */
function Icon({ name, size = 28, stroke = 1.6, className, style }) {
  const common = {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round",
    strokeLinejoin: "round", className, style,
  };
  const paths = {
    // hero quick services
    clipping: <React.Fragment><circle cx="6" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><path d="M8 7.5 20 17M8 16.5 20 7"/></React.Fragment>,
    masking: <React.Fragment><path d="M3 17c3-1 4-9 9-9s5 8 9 9"/><path d="M3 20h18"/><circle cx="12" cy="5" r="1.6"/></React.Fragment>,
    mannequin: <React.Fragment><path d="M9 3.5a3 3 0 0 0 6 0"/><path d="M12 6.5v3M6 21l1.5-7.5L4 11l3.5-1.5h9L20 11l-3.5 2.5L18 21"/></React.Fragment>,
    retouch: <React.Fragment><path d="M4 20l4-1 9.5-9.5a2 2 0 0 0 0-2.8l-.2-.2a2 2 0 0 0-2.8 0L5 16z"/><path d="M14 7l3 3"/></React.Fragment>,
    color: <React.Fragment><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18 4.5 4.5 0 0 1 0-9 4.5 4.5 0 0 0 0-9z"/></React.Fragment>,
    ecom: <React.Fragment><path d="M4 4h2l2 12h10l2-8H7"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></React.Fragment>,
    shadow: <React.Fragment><circle cx="11" cy="9" r="5.5"/><ellipse cx="13" cy="19.5" rx="7" ry="1.8"/></React.Fragment>,
    jewelry: <React.Fragment><path d="M6 3h12l3 5-9 13L3 8z"/><path d="M3 8h18M8 3 5.5 8 12 21l6.5-13L16 3M9 8l3 13 3-13"/></React.Fragment>,
    product: <React.Fragment><path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></React.Fragment>,
    // promises
    quality: <React.Fragment><path d="M9 12.5l2 2 4-4.5"/><path d="M12 2l2.4 1.7 2.9-.2 1 2.8 2.4 1.7-1 2.8 1 2.8-2.4 1.7-1 2.8-2.9-.2L12 22l-2.4-1.7-2.9.2-1-2.8L3.3 16.2l1-2.8-1-2.8 2.4-1.7 1-2.8 2.9.2z"/></React.Fragment>,
    price: <React.Fragment><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 2.8 12V4.8A2 2 0 0 1 4.8 2.8H12a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.3"/></React.Fragment>,
    delivery: <React.Fragment><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></React.Fragment>,
    free: <React.Fragment><path d="M12 3l2.5 5.2 5.7.8-4.1 4 1 5.6L12 21l-5.1 2.6 1-5.6-4.1-4 5.7-.8z"/></React.Fragment>,
    support: <React.Fragment><path d="M5 13a7 7 0 0 1 14 0"/><rect x="3" y="13" width="4" height="6" rx="1.4"/><rect x="17" y="13" width="4" height="6" rx="1.4"/><path d="M19 19v1a3 3 0 0 1-3 3h-2"/></React.Fragment>,
    mail: <React.Fragment><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></React.Fragment>,
    phone: <React.Fragment><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></React.Fragment>,
    chat: <React.Fragment><path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5z"/></React.Fragment>,
    pin: <React.Fragment><path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></React.Fragment>,
    server: <React.Fragment><rect x="3" y="4" width="18" height="7" rx="1.6"/><rect x="3" y="13" width="18" height="7" rx="1.6"/><path d="M7 7.5h.01M7 16.5h.01"/></React.Fragment>,
    lock: <React.Fragment><rect x="4.5" y="10" width="15" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><path d="M12 14v2.5"/></React.Fragment>,
    globe: <React.Fragment><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/></React.Fragment>,
  };
  return <svg {...common} aria-hidden="true">{paths[name] || paths.retouch}</svg>;
}
window.Icon = Icon;

/* Rotating word — cycles through an array with a soft fade/slide */
function RotatingWord({ words, interval = 2200, className }) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words, interval]);
  return (
    <span className={"rot-word " + (className || "")} key={i}>{words[i]}</span>
  );
}
window.RotatingWord = RotatingWord;
