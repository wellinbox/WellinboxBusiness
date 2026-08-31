import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  FILTER_CATS,
  PROJECTS,
  TECH_ITEMS,
  CONTACT,
  type Project,
} from "../data/portfolio";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconCheck,
  IconClose,
  IconClock,
} from "./icons";

/* ── แถบ filter ผลงาน ───────────────────────────────────── */
export function FilterBar({
  active,
  onChange,
}: {
  active: string;
  onChange: (c: string) => void;
}) {
  const counts = useMemo(() => {
    const m = new Map<string, number>();
    FILTER_CATS.forEach((c) =>
      m.set(c, c === "ทั้งหมด" ? PROJECTS.length : PROJECTS.filter((p) => p.cats.includes(c)).length)
    );
    return m;
  }, []);

  return (
    <div className="flex flex-wrap gap-2.5 mb-10">
      {FILTER_CATS.map((c) => {
        const on = active === c;
        return (
          <button
            key={c}
            onClick={() => onChange(c)}
            aria-pressed={on}
            className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
              on
                ? "border-mint bg-mint text-deep shadow-[0_0_24px_rgba(52,224,188,0.25)]"
                : "border-line bg-panel/60 text-mist hover:border-mint/60 hover:text-fog hover:-translate-y-0.5"
            }`}
          >
            {c}
            <span
              className={`font-mono text-[11px] tabular-nums ${on ? "text-deep/70" : "text-mist/70 group-hover:text-mint"}`}
            >
              {counts.get(c)}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ── Case study card ────────────────────────────────────── */
export function CaseCard({
  p,
  index,
  onOpen,
}: {
  p: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  return (
    <article className="card-in h-full" style={{ animationDelay: `${index * 70}ms` }}>
      <button
        onClick={() => onOpen(p)}
        className="group flex h-full w-full flex-col overflow-hidden rounded-lg border border-line bg-panel text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-mint/50 hover:shadow-[0_28px_60px_-24px_rgba(52,224,188,0.22)]"
      >
        <div className="relative aspect-[3/2] overflow-hidden">
          <img
            src={p.image}
            alt={p.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
          <span className="absolute left-3 top-3 rounded border border-line/80 bg-deep/80 px-2 py-1 font-mono text-[11px] text-mint backdrop-blur-sm">
            {p.platform}
          </span>
          <span className="absolute right-3 top-3 font-mono text-[11px] text-fog/70">{p.year}</span>
          <span className="absolute bottom-3 right-3 inline-flex translate-y-2 items-center gap-1.5 rounded-md bg-mint px-3 py-1.5 text-xs font-bold text-deep opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            อ่านเคสเต็ม <IconArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-amber">{p.industry}</p>
          <h3 className="mt-1.5 font-display text-xl font-bold text-fog transition-colors group-hover:text-mint">
            {p.name}
          </h3>
          <p className="mt-0.5 text-xs text-mist">{p.client}</p>

          <p className="mt-3.5 text-sm leading-relaxed text-mist">
            <span className="font-semibold text-fog/80">โจทย์ — </span>
            {p.challenge}
          </p>

          <ul className="mt-3.5 space-y-1.5">
            {p.features.slice(0, 2).map((f) => (
              <li key={f} className="flex items-start gap-2 text-[13px] leading-snug text-fog/80">
                <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mint" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <span key={t} className="rounded border border-line px-2 py-0.5 font-mono text-[10.5px] text-mist">
                {t}
              </span>
            ))}
          </div>

          <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-mint">
            ดูเคสสตัดี้
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
        </div>
      </button>
    </article>
  );
}

/* ── CTA tile ปิดท้าย grid ───────────────────────────────── */
export function NextProjectTile({ index }: { index: number }) {
  return (
    <a
      href="#contact"
      className="card-in group flex h-full min-h-[320px] flex-col justify-between rounded-lg border border-dashed border-line p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-mint/70 hover:bg-panel/40"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div>
        <p className="font-mono text-xs text-mint">// ช่องถัดไป</p>
        <h3 className="mt-3 font-display text-2xl font-bold leading-snug text-fog">
          โปรเจกต์ถัดไป
          <br />
          อาจเป็นของ<span className="text-mint">คุณ</span>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-mist">
          เล่าระบบที่อยากได้มาให้เราฟัง — ปรึกษาและตีโจทย์ครั้งแรกฟรี ไม่มีค่าใช้จ่าย
        </p>
      </div>
      <span className="mt-8 inline-flex items-center gap-2 font-semibold text-mint">
        คุยกับเรา
        <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </span>
    </a>
  );
}

/* ── Modal เคสเต็ม ──────────────────────────────────────── */
export function CaseModal({ p, onClose }: { p: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!p) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [p, onClose]);

  if (!p) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6">
      <div className="backdrop-in absolute inset-0 bg-deep/85 backdrop-blur-sm" onClick={onClose} aria-hidden />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`เคสสตัดี้ ${p.name}`}
        className="modal-in scroll-thin relative max-h-[92vh] w-full overflow-y-auto rounded-t-xl border border-line bg-ink shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] sm:max-h-[86vh] sm:max-w-3xl sm:rounded-xl"
      >
        <button
          onClick={onClose}
          aria-label="ปิด"
          className="absolute right-4 top-4 z-10 rounded-md border border-line bg-deep/80 p-2 text-fog backdrop-blur transition-colors hover:border-mint hover:text-mint"
        >
          <IconClose className="h-5 w-5" />
        </button>

        <div className="relative aspect-[16/8] overflow-hidden">
          <img src={p.image} alt={p.alt} className="kenburns h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded border border-mint/40 bg-mint/10 px-2.5 py-1 font-mono text-[11px] text-mint">
              {p.platform}
            </span>
            <span className="rounded border border-line px-2.5 py-1 font-mono text-[11px] text-amber">{p.industry}</span>
            <span className="rounded border border-line px-2.5 py-1 font-mono text-[11px] text-mist">{p.year}</span>
          </div>

          <h3 className="mt-4 font-display text-3xl font-bold text-fog sm:text-4xl">{p.name}</h3>
          <p className="mt-1.5 text-mist">{p.client}</p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <div className="rounded-lg border border-line bg-panel/70 p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">โจทย์ธุรกิจ</p>
              <p className="mt-2.5 text-sm leading-relaxed text-fog/85">{p.challenge}</p>
            </div>
            <div className="rounded-lg border border-line bg-panel/70 p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mint">วิธีที่เราแก้</p>
              <p className="mt-2.5 text-sm leading-relaxed text-fog/85">{p.solution}</p>
            </div>
          </div>

          <div className="mt-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist">ฟีเจอร์เด่น</p>
            <ul className="mt-3 space-y-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm leading-relaxed text-fog/85">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded border border-mint/40 bg-mint/10">
                    <IconCheck className="h-3 w-3 text-mint" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist">ผลลัพธ์หลังใช้งาน</p>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {p.results.map((r) => (
                <div key={r.label} className="rounded-lg border border-line bg-panel/70 p-4 transition-colors hover:border-mint/50">
                  <p className="font-display text-2xl font-bold text-mint">{r.value}</p>
                  <p className="mt-1 text-xs leading-snug text-mist">{r.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-1.5">
            {p.tech.map((t) => (
              <span key={t} className="rounded border border-line px-2.5 py-1 font-mono text-[11px] text-fog/80">
                {t}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-mint px-5 py-3 font-semibold text-deep transition-all hover:bg-fog hover:shadow-[0_0_32px_rgba(52,224,188,0.35)]"
          >
            อยากได้ระบบแบบนี้ — คุยกับเรา <IconArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Marquee เทคโนโลยี ──────────────────────────────────── */
const GROUP_DOT: Record<string, string> = {
  Frontend: "bg-mint",
  "Backend & Data": "bg-amber",
  "Mobile & Desktop": "bg-fog",
  "Infra & Tools": "bg-mist",
};

function TechRow({ items, reverse = false }: { items: typeof TECH_ITEMS; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee overflow-hidden py-2.5">
      <div className={`marquee-track ${reverse ? "is-reverse" : ""} items-center gap-3`}>
        {doubled.map((t, i) => (
          <span
            key={`${t.name}-${i}`}
            aria-hidden={i >= items.length}
            className="inline-flex shrink-0 items-center gap-3 rounded-md border border-line bg-panel/70 px-4 py-2.5 transition-colors hover:border-mint/50"
          >
            <span className={`h-1.5 w-1.5 rounded-full ${GROUP_DOT[t.group]}`} />
            <span className="text-sm font-semibold text-fog">{t.name}</span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-mist">{t.group}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function TechMarquee() {
  const rowA = TECH_ITEMS.filter((_, i) => i % 2 === 0);
  const rowB = TECH_ITEMS.filter((_, i) => i % 2 === 1);
  return (
    <div className="relative -mx-5 sm:-mx-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-deep to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-deep to-transparent" />
      <TechRow items={rowA} />
      <TechRow items={rowB} reverse />
    </div>
  );
}

/* ── ฟอร์มติดต่อ (Formspree-ready, ไม่ใช้ backend ตัวเอง) ── */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sent");
    e.currentTarget.reset();
  };

  const inputCls =
    "w-full rounded-md border border-line bg-ink/70 px-3.5 py-2.5 text-sm text-fog placeholder:text-mist/60 outline-none transition-colors focus:border-mint";

  return (
    <div className="rounded-xl border border-line bg-panel p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-xl font-bold text-fog">ส่งข้อความถึงเรา</h3>
        <p className="font-mono text-[11px] text-mist">
          powered by <span className="text-amber">Formspree</span> — ไม่ต้องมี backend
        </p>
      </div>

      {status === "sent" ? (
        <div className="mt-6 rounded-lg border border-mint/40 bg-mint/10 p-5">
          <p className="font-semibold text-mint">ได้รับข้อความของคุณแล้ว (โหมดเดโม)</p>
          <p className="mt-2 text-sm leading-relaxed text-fog/85">
            ฟอร์มนี้พร้อมเชื่อม Formspree — เพียงสร้างฟอร์มฟรีที่ <span className="font-mono text-mint">formspree.io</span>{" "}
            แล้วแทนที่ <span className="font-mono text-amber">YOUR_FORM_ID</span> ใน{" "}
            <span className="font-mono">src/components/portfolio.tsx</span>{" "}
            ข้อความทั้งหมดจะถูกส่งเข้าอีเมลคุณทันทีโดยไม่มีเซิร์ฟเวอร์
          </p>
          <p className="mt-3 text-sm text-mist">
            ระหว่างนี้ทักเราโดยตรงได้ที่{" "}
            <a href={CONTACT.line.url} target="_blank" rel="noreferrer" className="font-semibold text-mint underline underline-offset-4">
              {CONTACT.line.handle}
            </a>{" "}
            ตอบไวในเวลาทำการ
          </p>
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="mt-6 grid gap-4 sm:grid-cols-2"
        >
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold text-mist">ชื่อของคุณ</span>
            <input required name="name" type="text" placeholder="สมชาย ใจดี" className={inputCls} />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold text-mist">ช่องทางติดต่อกลับ</span>
            <input required name="contact" type="text" placeholder="LINE ID / เบอร์โทร / อีเมล" className={inputCls} />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold text-mist">ประเภทงานที่ต้องการ</span>
            <select name="type" className={inputCls} defaultValue="เว็บไซต์ธุรกิจ">
              <option>เว็บไซต์ธุรกิจ</option>
              <option>ระบบ Back-office ภายใน</option>
              <option>โมบายแอปพลิเคชัน</option>
              <option>ระบบร้านค้า / POS</option>
              <option>ระบบสินเชื่อ / การเงิน</option>
              <option>อื่น ๆ</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold text-mist">งบประมาณโดยคร่าว</span>
            <select name="budget" className={inputCls} defaultValue="ยังไม่แน่ใจ">
              <option>ยังไม่แน่ใจ</option>
              <option>ต่ำกว่า 50,000 บาท</option>
              <option>50,000 – 150,000 บาท</option>
              <option>150,000 บาทขึ้นไป</option>
            </select>
          </label>
          <label className="block sm:col-span-2">
            <span className="mb-1.5 block text-xs font-semibold text-mist">เล่าโจทย์หรือปัญหาที่อยากแก้</span>
            <textarea
              required
              name="message"
              rows={4}
              placeholder="เช่น ร้านของเรามี 3 สาขา ต้องการระบบสต๊อกกลางที่ตัดอัตโนมัติเมื่อหน้าร้านขาย..."
              className={`${inputCls} resize-none`}
            />
          </label>
          <button
            type="submit"
            className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-md bg-mint px-5 py-3 font-semibold text-deep transition-all hover:bg-fog hover:shadow-[0_0_32px_rgba(52,224,188,0.35)]"
          >
            ส่งข้อความ <IconArrowRight className="h-4 w-4" />
          </button>
        </form>
      )}

      <div className="mt-6 grid gap-4 border-t border-line/60 pt-5 sm:grid-cols-2">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-mint">ข้อดีของ static form</p>
          <ul className="mt-2 space-y-1.5 text-[13px] text-mist">
            <li className="flex gap-2"><IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mint" />ตั้งค่า 5 นาที ไม่ต้องดูแลเซิร์ฟเวอร์</li>
            <li className="flex gap-2"><IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mint" />มีระบบกันสแปมและ honeypot ในตัว</li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-amber">ข้อจำกัด</p>
          <ul className="mt-2 space-y-1.5 text-[13px] text-mist">
            <li className="flex gap-2"><IconClock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber" />แผนฟรีจำกัด ~50 ข้อความ/เดือน</li>
            <li className="flex gap-2"><IconClock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber" />ต้องพึ่งบริการภายนอกเป็นหลัก</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
