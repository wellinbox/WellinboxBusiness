import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/* ── hook: เคารพ prefers-reduced-motion ─────────────────── */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fn = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return reduced;
}

/* ── Scroll reveal wrapper ──────────────────────────────── */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ "--rv-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/* ── Scramble / decode headline ─────────────────────────── */
const GLYPHS = "wellinbox#</>01_";
export function ScrambleText({ text, className = "" }: { text: string; className?: string }) {
  const reduced = useReducedMotion();
  const [out, setOut] = useState(() => (reduced ? text : ""));
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduced) {
      setOut(text);
      return;
    }
    if (!started) return;
    let frame = 0;
    const id = window.setInterval(() => {
      frame += 1;
      const solved = Math.floor(frame / 3);
      if (solved >= text.length) {
        setOut(text);
        window.clearInterval(id);
        return;
      }
      let s = text.slice(0, solved);
      for (let i = solved; i < text.length; i++) {
        const c = text[i];
        s += c === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      setOut(s);
    }, 42);
    return () => window.clearInterval(id);
  }, [started, reduced, text]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {out || "\u00A0"}
    </span>
  );
}

/* ── Terminal window พิมพ์ทีละตัว ─────────────────────────── */
export type TermLine = { t: "cmd" | "out" | "ok" | "amber"; s: string };

export function Terminal({ lines }: { lines: TermLine[] }) {
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState<{ line: number; ch: number }>(() =>
    reduced ? { line: lines.length, ch: 0 } : { line: 0, ch: 0 }
  );
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(reduced);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  useEffect(() => {
    if (!started || reduced) return;
    const { line, ch } = progress;
    if (line >= lines.length) return;
    const cur = lines[line];
    let t: number;
    if (cur.t === "cmd" && ch < cur.s.length) {
      t = window.setTimeout(() => setProgress({ line, ch: ch + 1 }), 26 + Math.random() * 30);
    } else {
      t = window.setTimeout(() => setProgress({ line: line + 1, ch: 0 }), cur.t === "cmd" ? 320 : 180);
    }
    return () => window.clearTimeout(t);
  }, [started, reduced, progress, lines]);

  const done = reduced || progress.line >= lines.length;

  return (
    <div ref={ref} className="rounded-xl border border-line bg-ink/90 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.65)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-panel/70">
        <span className="size-2.5 rounded-full bg-ember/80" />
        <span className="size-2.5 rounded-full bg-amber/80" />
        <span className="size-2.5 rounded-full bg-mint/80" />
        <span className="ml-3 font-mono text-[11px] text-mist tracking-wide">wellinbox@studio — deploy</span>
      </div>
      <div className="p-4 sm:p-5 font-mono text-[12px] sm:text-[13px] leading-relaxed min-h-[264px]">
        {lines.map((l, i) => {
          if (i > progress.line) return null;
          const typing = i === progress.line && !reduced;
          const text = typing ? l.s.slice(0, progress.ch) : l.s;
          const cursor = <span className="cursor-blink ml-0.5 inline-block h-[13px] w-[7px] translate-y-[2px] bg-mint" />;
          if (l.t === "cmd")
            return (
              <p key={i} className="text-fog">
                <span className="text-mint select-none">$ </span>
                {text}
                {typing && cursor}
              </p>
            );
          if (l.t === "ok")
            return (
              <p key={i} className="text-mint">
                <span className="select-none">[ok] </span>
                {text}
              </p>
            );
          if (l.t === "amber")
            return (
              <p key={i} className="text-amber">
                {text}
              </p>
            );
          return (
            <p key={i} className="text-mist">
              {text}
              {typing && cursor}
            </p>
          );
        })}
        {done && (
          <p className="text-fog">
            <span className="text-mint select-none">$ </span>
            <span className="cursor-blink ml-0.5 inline-block h-[13px] w-[7px] translate-y-[2px] bg-mint" />
          </p>
        )}
      </div>
    </div>
  );
}

/* ── ตัวเลขนับขึ้นเมื่อเลื่อนถึง ─────────────────────────── */
export function Counter({
  to,
  suffix = "",
  label,
}: {
  to: number;
  suffix?: string;
  label: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [val, setVal] = useState(reduced ? to : 0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (reduced) {
      setVal(to);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const dur = 1100;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, reduced, to]);

  return (
    <div ref={ref}>
      <p className="font-display text-3xl sm:text-4xl font-bold text-fog tabular-nums">
        {val}
        <span className="text-mint">{suffix}</span>
      </p>
      <p className="mt-1 text-sm text-mist">{label}</p>
    </div>
  );
}
