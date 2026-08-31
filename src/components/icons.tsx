/* ไอคอน SVG วาดเองทั้งหมด — stroke-based, ใช้ currentColor */

type P = { className?: string };

const base = (className?: string) => ({
  className,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

/* โลโก้ Wellinbox: กล่อง inbox + ลูกศรเข้า */
export const LogoMark = ({ className }: P) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
    <rect x="4.5" y="7" width="23" height="19" rx="3.5" stroke="currentColor" strokeWidth="2.4" />
    <path d="M4.5 14.5 16 21l11.5-6.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 2v7m0 0 3-3m-3 3-3-3" stroke="#34e0bc" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconGlobe = ({ className }: P) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.6 2.4 3.9 5.2 3.9 8.5S14.6 18.1 12 20.5C9.4 18.1 8.1 15.3 8.1 12S9.4 5.9 12 3.5Z" />
  </svg>
);

export const IconGauge = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M4 14a8 8 0 1 1 16 0" />
    <path d="M12 14 15.5 9" />
    <path d="M4 18h16" />
    <circle cx="12" cy="14" r="1.4" fill="currentColor" stroke="none" />
  </svg>
);

export const IconDevice = ({ className }: P) => (
  <svg {...base(className)}>
    <rect x="7" y="3" width="10" height="18" rx="2.5" />
    <path d="M10.5 17.5h3" />
  </svg>
);

export const IconCoins = ({ className }: P) => (
  <svg {...base(className)}>
    <ellipse cx="9.5" cy="8" rx="5.5" ry="3" />
    <path d="M4 8v4c0 1.66 2.46 3 5.5 3S15 13.66 15 12V8" />
    <path d="M4 12v4c0 1.66 2.46 3 5.5 3 1.1 0 2.13-.17 3-.47" />
    <path d="M15.5 12.2c2.7.2 4.5 1.4 4.5 2.8 0 1.2-1.4 2.3-3.4 2.7" />
    <path d="M20 15v3c0 1.1-1.1 2-2.7 2.5" />
  </svg>
);

export const IconPuzzle = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M9.5 4.5a2 2 0 1 1 4 0H17a1 1 0 0 1 1 1v3.5a2 2 0 1 0 0 4V16.5a1 1 0 0 1-1 1h-3.5a2 2 0 1 1-4 0H6a1 1 0 0 1-1-1V13a2 2 0 1 1 0-4V5.5a1 1 0 0 1 1-1h3.5Z" />
  </svg>
);

export const IconPen = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="m5 19 .9-3.6L15.5 5.8a2 2 0 0 1 2.8 0l-.1-.1a2 2 0 0 1 0 2.8L8.6 18.1 5 19Z" />
    <path d="m13.5 7.5 3 3" />
    <path d="M5 19h6" />
  </svg>
);

export const IconShield = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M12 3.5 5 6v5.2c0 4.3 2.9 7.4 7 9.3 4.1-1.9 7-5 7-9.3V6l-7-2.5Z" />
    <path d="m9 11.8 2.1 2.1L15.3 9.5" />
  </svg>
);

export const IconArrowRight = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M4.5 12h15m0 0-5.5-5.5M19.5 12 14 17.5" />
  </svg>
);

export const IconArrowUpRight = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M6.5 17.5 17.5 6.5m0 0H9m8.5 0V15" />
  </svg>
);

export const IconCheck = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const IconChat = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M12 4c4.7 0 8.5 3.2 8.5 7.2 0 4-3.8 7.3-8.5 7.3-.9 0-1.9-.1-2.7-.4L5 20l1-3.4C4.4 15.3 3.5 13.4 3.5 11.2 3.5 7.2 7.3 4 12 4Z" />
    <path d="M8.5 11.2h.01M12 11.2h.01M15.5 11.2h.01" strokeWidth="2.4" />
  </svg>
);

export const IconPhone = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M7.8 4.2 9.7 8l-1.9 1.9a12.8 12.8 0 0 0 6.3 6.3l1.9-1.9 3.8 1.9v3.1a1.7 1.7 0 0 1-1.9 1.7C10.3 20.3 3.7 13.7 3 6.1A1.7 1.7 0 0 1 4.7 4.2h3.1Z" />
  </svg>
);

export const IconMail = ({ className }: P) => (
  <svg {...base(className)}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
    <path d="m4.5 8 7.5 5.5L19.5 8" />
  </svg>
);

export const IconFacebook = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M13.4 20.5v-6.6h2.5l.5-3.1h-3V8.9c0-.9.3-1.6 1.7-1.6h1.5V4.5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.4H7.9v3.1h2.5v6.6h3Z" />
  </svg>
);

export const IconGithub = ({ className }: P) => (
  <svg {...base(className)}>
    <circle cx="6" cy="6" r="2.4" />
    <circle cx="6" cy="18" r="2.4" />
    <circle cx="18" cy="8" r="2.4" />
    <path d="M6 8.4v7.2M6 12h6a3 3 0 0 0 3-3v-.6" />
  </svg>
);

export const IconSend = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M20 4.5 4 10.8l6 2.4 2.4 6.3L20 4.5Z" />
    <path d="m10 13.2 4.5-4.5" />
  </svg>
);

export const IconClose = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const IconMenu = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M4 7h16M4 12h10M4 17h16" />
  </svg>
);

/* เครื่องหมาย spark สำหรับคั่น marquee */
export const IconSpark = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2.5c.9 4.8 2.4 7.2 3.5 8.1 1 .9 3.1 1.2 6 1.4-2.9.2-5 .5-6 1.4-1.1.9-2.6 3.3-3.5 8.1-.9-4.8-2.4-7.2-3.5-8.1-1-.9-3.1-1.2-6-1.4 2.9-.2 5-.5 6-1.4 1.1-.9 2.6-3.3 3.5-8.1Z" />
  </svg>
);

export const IconLayers = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="m12 3.5 8.5 4.5L12 12.5 3.5 8 12 3.5Z" />
    <path d="m3.5 12.5 8.5 4.5 8.5-4.5" />
    <path d="m3.5 16.5 8.5 4.5 8.5-4.5" />
  </svg>
);

export const IconClock = ({ className }: P) => (
  <svg {...base(className)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const IconDoc = ({ className }: P) => (
  <svg {...base(className)}>
    <path d="M7 3.5h7L18.5 8v12a1 1 0 0 1-1 1h-10.5a1 1 0 0 1-1-1v-15.5a1 1 0 0 1 1-1Z" />
    <path d="M14 3.5V8h4.5M9.5 12.5h5M9.5 16h5" />
  </svg>
);
