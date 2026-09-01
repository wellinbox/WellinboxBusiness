import { useEffect, useState, type ReactNode } from "react";
import { NAV_LINKS, CONTACT } from "../data/portfolio";
import {
  LogoMark,
  IconMenu,
  IconClose,
  IconArrowUpRight,
  IconChat,
  IconMail,
  IconPhone,
  IconGithub,
} from "./icons";
import { Reveal } from "./motion";

/* ── โลโก้ + wordmark ───────────────────────────────────── */
export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5 group" aria-label="Wellinbox — กลับขึ้นด้านบน">
      <LogoMark className={`text-fog transition-colors group-hover:text-mint ${compact ? "w-7 h-7" : "w-8 h-8"}`} />
      <span className={`font-display font-bold tracking-tight ${compact ? "text-lg" : "text-xl"}`}>
        Well<span className="text-mint">inbox</span>
      </span>
    </a>
  );
}

/* ── Navbar พร้อม progress bar ───────────────────────────── */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (y / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-deep/85 backdrop-blur-md border-b border-line/70" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-[72px] flex items-center justify-between">
        <Brand />
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-mist hover:text-fog transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-mint after:transition-transform hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-mint px-4 py-2 text-sm font-semibold text-deep transition-all hover:bg-fog hover:shadow-[0_0_28px_rgba(52,224,188,0.35)]"
          >
            เริ่มโปรเจกต์
            <IconArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <button
          className="md:hidden p-2 text-fog hover:text-mint transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={open}
        >
          {open ? <IconClose className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
        </button>
      </nav>

      {/* progress bar */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-transparent">
        <div className="h-full bg-mint transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} />
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden border-t border-line/70 bg-ink/95 backdrop-blur-md">
          <div className="px-5 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-fog font-medium hover:text-mint transition-colors border-b border-line/40 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-mint px-4 py-2.5 font-semibold text-deep"
            >
              เริ่มโปรเจกต์
              <IconArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ── Section header ใช้ซ้ำทุก section ─────────────────────── */
export function SectionHeader({
  no,
  kicker,
  title,
  desc,
}: {
  no: string;
  kicker: string;
  title: ReactNode;
  desc?: string;
}) {
  return (
    <Reveal>
      <div className="grid gap-5 lg:grid-cols-12 lg:items-end mb-12 lg:mb-16">
        <div className="lg:col-span-7">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-mist mb-4">
            <span className="text-mint">{no}</span> <span className="text-line">//</span> {kicker}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] tracking-tight text-fog">
            {title}
          </h2>
        </div>
        {desc && (
          <div className="lg:col-span-5">
            <p className="text-mist leading-relaxed lg:ml-auto lg:max-w-md lg:text-right">{desc}</p>
          </div>
        )}
      </div>
    </Reveal>
  );
}

/* ── Footer ─────────────────────────────────────────────── */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line/70 bg-ink/60 relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 font-display font-bold text-[9rem] sm:text-[13rem] leading-none text-outline opacity-40 select-none whitespace-nowrap">
        WELLINBOX
      </div>
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-14 pb-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Brand />
            <p className="mt-4 text-mist max-w-sm leading-relaxed">
              สตูดิโอรับทำเว็บไซต์และระบบงานเฉพาะทาง พัฒนางานสั่งตัดให้ธุรกิจไทย ตั้งแต่เว็บองค์กรจนถึงระบบสินเชื่อ
            </p>
            <p className="mt-5 font-mono text-xs text-mist">
              <span className="text-mint">$</span> status: <span className="text-fog">ready for new projects</span>
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist mb-4">เมนู</p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-fog/80 hover:text-mint transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist mt-6 mb-4">SEO</p>
            <ul className="space-y-2.5 font-mono text-[13px]">
              <li>
                <a href="#sitemap" className="text-fog/80 hover:text-mint transition-colors">
                  แผนผังเว็บไซต์
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noreferrer" className="text-fog/80 hover:text-mint transition-colors">
                  sitemap.xml
                </a>
              </li>
              <li>
                <a href="/robots.txt" target="_blank" rel="noreferrer" className="text-fog/80 hover:text-mint transition-colors">
                  robots.txt
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist mb-4">ติดต่อตรง</p>
            <ul className="space-y-3">
              <li>
                <a href={CONTACT.line.url} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-fog/80 hover:text-mint transition-colors">
                  <IconChat className="w-4 h-4 text-mint" /> {CONTACT.line.handle}
                </a>
              </li>
              <li>
                <a href={CONTACT.phone.url} className="flex items-center gap-2.5 text-fog/80 hover:text-mint transition-colors">
                  <IconPhone className="w-4 h-4 text-mint" /> {CONTACT.phone.handle}
                </a>
              </li>
              <li>
                <a href={CONTACT.email.url} className="flex items-center gap-2.5 text-fog/80 hover:text-mint transition-colors">
                  <IconMail className="w-4 h-4 text-mint" /> {CONTACT.email.handle}
                </a>
              </li>
              <li>
                <a href={CONTACT.github.url} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-fog/80 hover:text-mint transition-colors">
                  <IconGithub className="w-4 h-4 text-mint" /> {CONTACT.github.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-line/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-mist">© {year} Wellinbox Studio — สงวนลิขสิทธิ์</p>
          <p className="font-mono text-[11px] text-mist">
            static site · no backend · โหลดไวใน <span className="text-mint">&lt;1s</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
