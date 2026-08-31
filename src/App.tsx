import { useState } from "react";
import { Navbar, Footer, SectionHeader } from "./components/chrome";
import { Reveal, ScrambleText, Terminal, Counter, type TermLine } from "./components/motion";
import {
  FilterBar,
  CaseCard,
  CaseModal,
  NextProjectTile,
  TechMarquee,
  ContactForm,
} from "./components/portfolio";
import { SitemapSection } from "./components/sitemap";
import {
  PROJECTS,
  SERVICES,
  DIFFERENTIATORS,
  TECH_GROUPS,
  PROCESS,
  STATS,
  CONTACT,
  type Project,
} from "./data/portfolio";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconSpark,
  IconGlobe,
  IconGauge,
  IconDevice,
  IconCoins,
  IconPuzzle,
  IconPen,
  IconShield,
  IconChat,
  IconPhone,
  IconMail,
  IconFacebook,
  IconGithub,
  IconClock,
} from "./components/icons";

const SERVICE_ICONS = { globe: IconGlobe, gauge: IconGauge, device: IconDevice, coins: IconCoins };
const DIFF_ICONS = { puzzle: IconPuzzle, pen: IconPen, shield: IconShield };

const TICKER = [
  "เว็บไซต์ธุรกิจ",
  "ระบบ Back-office",
  "โมบายแอปพลิเคชัน",
  "ระบบร้านค้า / POS",
  "ระบบสินเชื่อ / รับจำนำ",
  "UX/UI Design",
  "Supabase & Cloud",
  "ดูแลหลังส่งมอบ",
];

const TERM_LINES: TermLine[] = [
  { t: "cmd", s: "npx wellinbox init --project gold-shop-pos" },
  { t: "out", s: "วิเคราะห์โจทย์ธุรกิจค้าปลีกทอง... พบ 12 เวิร์กโฟลว์" },
  { t: "cmd", s: "wellinbox design --ux-flow --prototype" },
  { t: "ok", s: "prototype พร้อมให้ทีมลูกค้าทดลองใช้จริง" },
  { t: "cmd", s: "wellinbox build --stack nuxt3,supabase,tailwind" },
  { t: "out", s: "→ compile 214 modules ... เสร็จใน 3.2s" },
  { t: "ok", s: "deploy ขึ้น production สำเร็จ" },
  { t: "amber", s: "ส่งมอบเอกสาร + อบรมทีมงาน ... เรียบร้อย" },
];

/* ── Hero ───────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-blueprint" aria-hidden />
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full bg-mint/10 blur-[130px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-[-12%] h-[380px] w-[380px] rounded-full bg-amber/[0.07] blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 pt-32 pb-16 sm:px-8 sm:pt-40 lg:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/60 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.18em] text-mist uppercase">
                <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-mint" />
                Software Studio — รับทำเว็บ & ระบบ custom
              </p>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-7 font-display font-bold tracking-tight leading-[1.04]">
                <ScrambleText text="Wellinbox" className="block text-[3.3rem] text-fog sm:text-7xl lg:text-[5.4rem]" />
                <span className="mt-5 block text-2xl font-semibold leading-snug text-mist sm:text-[1.65rem]">
                  เว็บไซต์ & ระบบงาน<span className="text-mint">สั่งตัด</span>
                  <br className="sm:hidden" /> ที่สร้างมาพอดีกับธุรกิจคุณ
                </span>
              </h1>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-6 max-w-xl leading-relaxed text-mist">
                เราคือสตูดิโอที่รับทำเว็บไซต์และระบบงานภายในองค์กร ตั้งแต่เว็บบริษัท ระบบร้านทอง ระบบสินเชื่อ
                ไปจนถึงแอปมือถือ — <span className="text-fog">ออกแบบ UX/UI ใหม่ทุกโปรเจกต์ ไม่สวมเทมเพลตสำเร็จรูป</span>
              </p>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#portfolio"
                  className="group inline-flex items-center gap-2.5 rounded-md bg-mint px-6 py-3 font-semibold text-deep transition-all hover:bg-fog hover:shadow-[0_0_36px_rgba(52,224,188,0.4)]"
                >
                  ดูผลงานของเรา
                  <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 rounded-md border border-line px-6 py-3 font-semibold text-fog transition-all hover:border-mint/60 hover:text-mint"
                >
                  ติดต่อเรา
                  <IconArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={480}>
              <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line/60 pt-8 sm:grid-cols-4">
                {STATS.map((s) => (
                  <Counter key={s.label} to={s.to} suffix={s.suffix} label={s.label} />
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative lg:col-span-5">
            <Reveal delay={300}>
              <Terminal lines={TERM_LINES} />
            </Reveal>

            <div className="floaty absolute -left-8 -top-7 hidden lg:block" aria-hidden>
              <div className="rounded-lg border border-line bg-panel/95 px-4 py-3 shadow-[0_18px_50px_-12px_rgba(0,0,0,0.6)] backdrop-blur">
                <p className="font-display text-sm font-bold text-mint">Custom 100%</p>
                <p className="mt-0.5 text-[11px] text-mist">ไม่มีเทมเพลตในโค้ดเบสของเรา</p>
              </div>
            </div>
            <div className="floaty-slow absolute -right-5 -bottom-7 hidden lg:block" aria-hidden>
              <div className="flex items-center gap-3 rounded-lg border border-line bg-panel/95 px-4 py-3 shadow-[0_18px_50px_-12px_rgba(0,0,0,0.6)] backdrop-blur">
                <IconClock className="h-5 w-5 text-amber" />
                <div>
                  <p className="font-display text-sm font-bold text-fog">ตรงเวลาทุกสปรินต์</p>
                  <p className="mt-0.5 text-[11px] text-mist">รายงานความคืบหน้าทุกสัปดาห์</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── แถบ ticker บริการ ──────────────────────────────────── */
function ServiceTicker() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="marquee overflow-hidden border-y border-line/70 bg-ink/70 py-3.5">
      <div className="marquee-track items-center gap-8">
        {items.map((t, i) => (
          <span key={i} aria-hidden={i >= TICKER.length} className="inline-flex shrink-0 items-center gap-8">
            <span className={`font-display text-sm font-semibold tracking-wide ${i % 2 ? "text-mint" : "text-mist"}`}>
              {t}
            </span>
            <IconSpark className="h-3 w-3 text-line" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── บริการ ─────────────────────────────────────────────── */
function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeader
        no="01"
        kicker="บริการของเรา"
        title={
          <>
            เราสร้างอะไร
            <span className="text-mint">ให้ธุรกิจคุณ</span>
          </>
        }
        desc="งานทุกชิ้นเริ่มจากการนั่งคุยกับคนหน้างานจริง ไม่ใช่การหยิบธีมมาเปลี่ยนโลโก้ แล้วเรียกมันว่าระบบของคุณ"
      />

      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28 space-y-5">
            <Reveal>
              <p className="font-display text-xl font-semibold leading-relaxed text-fog">
                ทำไมทีมที่เลือกเรา
                <br />
                ถึงได้<span className="text-mint">ระบบที่ถูกใช้จริง</span>
              </p>
            </Reveal>
            {DIFFERENTIATORS.map((d, i) => {
              const Icon = DIFF_ICONS[d.icon];
              return (
                <Reveal key={d.title} delay={i * 110}>
                  <div className="group border-l-2 border-line pl-4 py-1 transition-colors hover:border-mint">
                    <div className="flex items-center gap-2.5">
                      <Icon className="h-4.5 w-4.5 text-mint" />
                      <h3 className="font-display font-semibold text-fog">{d.title}</h3>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-mist">{d.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="space-y-4 lg:col-span-8">
          {SERVICES.map((s, i) => {
            const Icon = SERVICE_ICONS[s.icon];
            return (
              <Reveal key={s.no} delay={i * 90}>
                <article className="group flex flex-col gap-5 rounded-lg border border-line bg-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-mint/50 hover:bg-raise sm:flex-row sm:items-start sm:p-7">
                  <span className="font-display text-3xl font-bold text-line transition-colors duration-300 group-hover:text-mint/70">
                    {s.no}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-fog transition-colors group-hover:text-mint sm:text-xl">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{s.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span key={t} className="rounded border border-line px-2.5 py-1 font-mono text-[11px] text-mist">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-line text-mist transition-all duration-300 group-hover:border-mint/60 group-hover:text-mint">
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── ผลงาน ──────────────────────────────────────────────── */
function Portfolio() {
  const [filter, setFilter] = useState("ทั้งหมด");
  const [selected, setSelected] = useState<Project | null>(null);
  const list = filter === "ทั้งหมด" ? PROJECTS : PROJECTS.filter((p) => p.cats.includes(filter));

  return (
    <section id="portfolio" className="relative border-t border-line/50 bg-ink/40">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeader
          no="02"
          kicker="ผลงานคัดเลือก"
          title={
            <>
              เคสจริง ระบบจริง
              <span className="text-mint">ใช้งานได้จริง</span>
            </>
          }
          desc="แต่ละงานคือโจทย์ธุรกิจที่ต่างกัน — กดการ์ดเพื่อดูว่าเราแก้ปัญหาอะไร ใช้เทคโนโลยีไหน และผลลัพธ์วัดได้เท่าไร"
        />

        <Reveal>
          <FilterBar active={filter} onChange={setFilter} />
        </Reveal>

        <div key={filter} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <CaseCard key={p.id} p={p} index={i} onOpen={setSelected} />
          ))}
          <NextProjectTile index={list.length} />
        </div>

        <p className="mt-8 text-center font-mono text-xs text-mist">
          แสดง <span className="text-mint">{list.length}</span> จาก {PROJECTS.length} โปรเจกต์ —{" "}
          <button onClick={() => setFilter("ทั้งหมด")} className="text-fog underline underline-offset-4 hover:text-mint transition-colors">
            ดูทั้งหมด
          </button>
        </p>
      </div>

      <CaseModal p={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

/* ── เทคโนโลยี ──────────────────────────────────────────── */
function Tech() {
  return (
    <section id="tech" className="relative border-t border-line/50">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeader
          no="03"
          kicker="เทคโนโลยีที่ถนัด"
          title={
            <>
              สแต็กที่เราใช้<span className="text-mint">ทำมาหากินทุกวัน</span>
            </>
          }
          desc="เลือกเทคโนโลยีจากโจทย์และงบของธุรกิจ ไม่ใช่จากกระแส — และทุกตัวคือสิ่งที่เราเขียนจริงในโปรเจกต์ที่ส่งมอบแล้ว"
        />

        <Reveal>
          <TechMarquee />
        </Reveal>

        <div className="mt-12 divide-y divide-line/70 border-y border-line/70">
          {TECH_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 100}>
              <div className="group flex flex-col gap-1.5 py-5 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <h3 className="font-display text-lg font-bold text-fog transition-colors group-hover:text-mint">
                  {g.title}
                </h3>
                <p className="font-mono text-[12.5px] text-mist sm:text-right">{g.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── กระบวนการทำงาน ─────────────────────────────────────── */
function Process() {
  return (
    <section id="process" className="relative border-t border-line/50 bg-ink/40">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeader
          no="04"
          kicker="กระบวนการทำงาน"
          title={
            <>
              จากโจทย์บนโต๊ะ สู่ระบบที่<span className="text-mint">ทีมคุณใช้จริง</span>
            </>
          }
          desc="เราทำงานเป็นรอบสั้น ๆ คุณเห็นของจริงทุกสัปดาห์ และคอมเมนต์ได้ตลอดก่อนส่งมอบ"
        />

        <div className="relative grid gap-10 md:grid-cols-4 md:gap-6">
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-[22px] hidden border-t border-dashed border-line md:block" aria-hidden />
          {PROCESS.map((s, i) => (
            <Reveal key={s.step} delay={i * 130}>
              <div className="group relative">
                <span className="relative z-10 grid h-11 w-11 place-items-center rounded-full border border-mint/40 bg-ink font-mono text-sm font-bold text-mint transition-all duration-300 group-hover:bg-mint group-hover:text-deep group-hover:shadow-[0_0_28px_rgba(52,224,188,0.4)]">
                  {s.step}
                </span>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-mist">{s.title}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-fog">{s.thai}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{s.desc}</p>
                <p className="mt-3 inline-flex items-center gap-1.5 rounded border border-line px-2 py-1 font-mono text-[11px] text-amber">
                  <IconClock className="h-3 w-3" /> {s.dur}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── ติดต่อเรา ──────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="relative border-t border-line/50">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeader
          no="05"
          kicker="ติดต่อเรา"
          title={
            <>
              เล่าโจทย์ของคุณ<span className="text-mint">มาให้เราฟัง</span>
            </>
          }
          desc="ไม่ต้องมีสเปกสมบูรณ์ — ส่งมาแค่ปัญหาที่อยากแก้ เราช่วยตีโจทย์และประเมินงบให้ฟรีทุกช่องทาง"
        />

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-3.5 lg:col-span-5">
            <Reveal>
              <a
                href={CONTACT.line.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-lg bg-mint p-4 text-deep transition-all hover:-translate-y-1 hover:shadow-[0_18px_44px_-14px_rgba(52,224,188,0.5)]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-deep/10">
                  <IconChat className="h-5.5 w-5.5" />
                </span>
                <span className="flex-1">
                  <span className="block font-display font-bold">LINE Official — ช่องทางหลัก</span>
                  <span className="block font-mono text-xs opacity-75">{CONTACT.line.handle}</span>
                </span>
                <IconArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>

            {[
              { icon: IconPhone, data: CONTACT.phone, note: "คลิกเพื่อโทรได้ทันทีบนมือถือ" },
              { icon: IconMail, data: CONTACT.email, note: "ตอบกลับภายใน 1 วันทำการ" },
              { icon: IconFacebook, data: CONTACT.facebook, note: "ติดตามผลงานและเบื้องหลัง" },
              { icon: IconGithub, data: CONTACT.github, note: "โค้ดตัวอย่างและ open source" },
            ].map((c, i) => (
              <Reveal key={c.data.label} delay={(i + 1) * 90}>
                <a
                  href={c.data.url}
                  target={c.data.url.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-lg border border-line bg-panel p-4 transition-all hover:-translate-y-1 hover:border-mint/60"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-line text-mist transition-colors group-hover:border-mint/60 group-hover:text-mint">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-fog">{c.data.label}</span>
                    <span className="block font-mono text-xs text-mist">
                      {c.data.handle} · {c.note}
                    </span>
                  </span>
                  <IconArrowUpRight className="h-4.5 w-4.5 text-mist transition-all group-hover:text-mint group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Reveal>
            ))}

            <Reveal delay={480}>
              <div className="rounded-lg border border-dashed border-line p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-mist">คุยกับเราแล้วได้อะไร</p>
                <ul className="mt-2.5 space-y-1.5 text-[13px] text-mist">
                  <li>1. วิเคราะห์โจทย์และขอบเขตงานฟรี</li>
                  <li>2. ใบเสนอราคาและไทม์ไลน์ชัดเจน</li>
                  <li>3. คำแนะนำสแต็กที่เหมาะกับงบ</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={150}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── ประกอบหน้า ─────────────────────────────────────────── */
export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="noise" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        <ServiceTicker />
        <Services />
        <Portfolio />
        <Tech />
        <Process />
        <Contact />
        <SitemapSection />
      </main>
      <Footer />
    </div>
  );
}
