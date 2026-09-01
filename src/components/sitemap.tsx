import { Reveal } from "./motion";
import { SectionHeader } from "./chrome";
import {
  NAV_LINKS,
  SERVICES,
  PROJECTS,
  SEO_KEYWORDS,
  SEO_CHECKLIST,
} from "../data/portfolio";
import { IconCheck, IconArrowUpRight } from "./icons";

/* ── โหนดต้นไม้โครงสร้างเว็บ ─────────────────────────────── */
type TreeNode = {
  href: string;
  label: string;
  desc?: string;
  external?: boolean;
  children?: { href: string; label: string }[];
};

const tree: TreeNode[] = [
  { href: "#top", label: "หน้าแรก", desc: "ภาพรวมสตูดิโอ + สถิติ" },
  {
    href: "#services",
    label: "บริการของเรา",
    desc: "4 กลุ่มบริการหลัก",
    children: SERVICES.map((s) => ({ href: "#services", label: s.title })),
  },
  {
    href: "#portfolio",
    label: "ผลงาน (Case Studies)",
    desc: `${PROJECTS.length} โปรเจกต์ + ระบบกรอง`,
    children: PROJECTS.map((p) => ({ href: "#portfolio", label: `${p.name} — ${p.industry}` })),
  },
  { href: "#tech", label: "เทคโนโลยีที่ถนัด", desc: "สแต็กที่ใช้ส่งมอบงานจริง" },
  { href: "#process", label: "กระบวนการทำงาน", desc: "4 ขั้นตอน Discovery → Launch" },
  {
    href: "#contact",
    label: "ติดต่อเรา",
    desc: "ทุกช่องทางติดต่อตรง",
    children: [
      { href: "https://lin.ee/wellinbox", label: "LINE Official @wellinbox" },
      { href: "tel:+66891234567", label: "โทรศัพท์ 089-123-4567" },
      { href: "mailto:hello@wellinbox.com", label: "hello@wellinbox.com" },
    ],
  },
  { href: "#sitemap", label: "แผนผังเว็บไซต์", desc: "หน้านี้" },
];

function TreeLink({
  href,
  label,
  external,
  dim,
}: {
  href: string;
  label: string;
  external?: boolean;
  dim?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`group/t inline-flex items-baseline gap-2 transition-all duration-200 hover:translate-x-1 ${
        dim ? "text-mist hover:text-mint" : "text-fog hover:text-mint"
      }`}
    >
      <span className={`inline-block transition-colors ${dim ? "text-line group-hover/t:text-mint" : "text-mint"}`}>
        {dim ? "·" : "▸"}
      </span>
      <span>{label}</span>
      {external && <IconArrowUpRight className="h-3 w-3 shrink-0 self-center text-mist" />}
    </a>
  );
}

/* ── Section แผนผังเว็บไซต์ ───────────────────────────────── */
export function SitemapSection() {
  const totalKeywords = SEO_KEYWORDS.reduce((n, g) => n + g.items.length, 0);

  return (
    <section id="sitemap" className="relative border-t border-line/50 bg-ink/40">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeader
          no="06"
          kicker="sitemap — แผนผังเว็บไซต์"
          title={
            <>
              ทุกหน้า ทุกคำค้นหา
              <span className="text-mint">รวมไว้ในที่เดียว</span>
            </>
          }
          desc="หน้าผังเว็บไซต์สำหรับทั้งผู้เยี่ยมชมและเครื่องมือค้นหา — ลิงก์ตรงเข้าทุก section พร้อมแผนที่คีย์เวิร์ดที่ธุรกิจเราครอบคลุม"
        />

        <div className="grid gap-10 lg:grid-cols-12">
          {/* ── ต้นไม้โครงสร้างเว็บ ── */}
          <Reveal>
            <div className="lg:col-span-5 h-full">
              <div className="h-full rounded-lg border border-line bg-panel p-6 sm:p-7">
                <div className="flex items-center justify-between border-b border-line/70 pb-4">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-mist">site structure</p>
                  <span className="font-mono text-[11px] text-mint">{tree.length} sections</span>
                </div>

                <p className="mt-5 font-mono text-sm font-semibold text-amber">wellinbox.com</p>

                <ul className="mt-3 space-y-4 font-mono text-[13px] leading-relaxed">
                  {tree.map((node, i) => {
                    const last = i === tree.length - 1;
                    const branch = last ? "└─" : "├─";
                    return (
                      <li key={node.label}>
                        <div className="flex items-baseline gap-2.5">
                          <span className="select-none text-line">{branch}</span>
                          <div>
                            <TreeLink href={node.href} label={node.label} />
                            {node.desc && <span className="ml-2 text-[11px] text-mist/70">// {node.desc}</span>}
                          </div>
                        </div>
                        {node.children && (
                          <ul className="mt-2 ml-[7px] space-y-1.5 border-l border-line/60 pl-4">
                            {node.children.map((c) => (
                              <li key={c.label}>
                                <TreeLink
                                  href={c.href}
                                  label={c.label}
                                  external={c.href.startsWith("http") || c.href.startsWith("tel:") || c.href.startsWith("mailto:")}
                                  dim
                                />
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-6 flex items-center justify-between rounded-md border border-dashed border-line px-4 py-3">
                  <p className="font-mono text-[11px] text-mist">
                    ไฟล์ sitemap สำหรับ crawler <span className="text-line">→</span>{" "}
                    <a href="/sitemap.xml" target="_blank" rel="noreferrer" className="text-mint hover:underline underline-offset-4">
                      /sitemap.xml
                    </a>
                  </p>
                  <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-mint" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── แผนที่คีย์เวิร์ด ── */}
          <div className="space-y-6 lg:col-span-7">
            {SEO_KEYWORDS.map((g, gi) => (
              <Reveal key={g.group} delay={gi * 100}>
                <div className="group rounded-lg border border-line bg-panel/60 p-6 transition-colors hover:border-mint/40 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <a href={g.href} className="font-display text-lg font-bold text-fog transition-colors hover:text-mint">
                      {g.group}
                    </a>
                    <span className="shrink-0 rounded border border-line px-2 py-0.5 font-mono text-[11px] text-mist">
                      {g.items.length} คีย์เวิร์ด
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((k) => (
                      <a
                        key={k}
                        href={g.href}
                        className="rounded-md border border-line bg-ink px-3 py-1.5 font-mono text-[12px] text-mist transition-all duration-200 hover:-translate-y-0.5 hover:border-mint/70 hover:bg-mint/10 hover:text-mint"
                      >
                        <span className="text-line">#</span>
                        {k}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

            {/* ── เช็กลิสต์ SEO เชิงเทคนิค ── */}
            <Reveal delay={150}>
              <div className="rounded-lg border border-mint/25 bg-panel p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/70 pb-4">
                  <p className="font-display font-bold text-fog">
                    Technical SEO <span className="font-mono text-xs font-normal text-mist">— ติดตั้งครบแล้วในโค้ด</span>
                  </p>
                  <span className="inline-flex items-center gap-2 rounded-full border border-mint/40 px-2.5 py-1 font-mono text-[11px] text-mint">
                    <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-mint" />
                    live
                  </span>
                </div>
                <ul className="mt-5 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                  {SEO_CHECKLIST.map((c) => (
                    <li key={c.item} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded bg-mint/15 text-mint">
                        <IconCheck className="h-3 w-3" />
                      </span>
                      <span className="text-sm leading-relaxed text-fog/90">
                        {c.item}{" "}
                        <span className="ml-1 rounded bg-ink px-1.5 py-0.5 font-mono text-[10.5px] text-amber">{c.file}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-line/60 pt-4 font-mono text-[11px] leading-relaxed text-mist">
                  รวม <span className="text-mint">{totalKeywords}</span> คีย์เวิร์ดครอบคลุม {SEO_KEYWORDS.length} กลุ่มธุรกิจ ·
                  ก่อน deploy อย่าลืมเปลี่ยน <span className="text-amber">wellinbox.com</span> ใน sitemap.xml และ canonical
                  เป็นโดเมนจริงของคุณ
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
