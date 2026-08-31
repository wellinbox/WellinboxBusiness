/* ─────────────────────────────────────────────────────────────
   ข้อมูลผลงานทั้งหมดของ Wellinbox (static data)
   เพิ่ม/แก้ไขผลงานใหม่ได้จากไฟล์นี้โดยไม่ต้องแตะ component
   ───────────────────────────────────────────────────────────── */

export type Project = {
  id: string;
  name: string;
  client: string;
  industry: string;
  platform: string;
  cats: string[];
  tech: string[];
  image: string;
  alt: string;
  year: string;
  challenge: string;
  solution: string;
  features: string[];
  results: { value: string; label: string }[];
};

export const FILTER_CATS = [
  "ทั้งหมด",
  "Web App",
  "Mobile App",
  "Desktop App",
  "การเงิน / สินเชื่อ",
  "การศึกษา",
] as const;

export const PROJECTS: Project[] = [
  {
    id: "aerograde",
    name: "AeroGrade",
    client: "วิทยาลัยเทคนิค — แผนกช่างอากาศยาน (ปวส.)",
    industry: "การศึกษา",
    platform: "Web App",
    cats: ["Web App", "การศึกษา"],
    tech: ["Nuxt 3", "Supabase", "Tailwind CSS", "TypeScript"],
    image:
      "https://image.qwenlm.ai/generated-images/161f28b8-9c68-4367-a480-51a9f3109133/_result.png",
    alt: "หน้าจอระบบแสดงผลสอบนักศึกษา AeroGrade",
    year: "2024",
    challenge:
      "ประกาศผลสอบผ่านกระดาษและไฟล์ Excel ทำให้นักศึกษาเช็คผลช้า ข้อมูลคลาดเคลื่อน และเจ้าหน้าที่ต้องตอบคำถามซ้ำ ๆ ทุกภาคเรียน",
    solution:
      "พัฒนาเว็บระบบแสดงผลสอบที่อาจารย์กรอกคะแนนครั้งเดียว ระบบคำนวณเกรดและ GPA อัตโนมัติ นักศึกษาเข้าสู่ระบบเพื่อดูผลได้ทันทีทุกอุปกรณ์ พร้อมสิทธิ์การเข้าถึงแยกตามบทบาท",
    features: [
      "ดูผลคะแนนและเกรดแยกรายวิชา พร้อม GPA รายเทอมและสะสม",
      "แดชบอร์ดอาจารย์: กรอก/แก้ไขคะแนนเป็นรายห้อง คำนวณเกรดอัตโนมัติ",
      "Row Level Security บน Supabase — นักศึกษาเห็นเฉพาะผลของตัวเอง",
    ],
    results: [
      { value: "< 1 นาที", label: "จากประกาศผลถึงมือนักศึกษา" },
      { value: "0", label: "เคสเกรดคลาดเคลื่อนหลังใช้งาน" },
      { value: "400+", label: "นักศึกษาใช้งานต่อภาคเรียน" },
    ],
  },
  {
    id: "golddesk",
    name: "GoldDesk POS",
    client: "ห้างทองปลีก — หลายสาขา",
    industry: "ค้าปลีกทองคำ",
    platform: "Desktop App",
    cats: ["Desktop App", "การเงิน / สินเชื่อ"],
    tech: [".NET", "SQL Server", "WinForms"],
    image:
      "https://image.qwenlm.ai/generated-images/81beedf8-33e7-4219-95db-d5d9fc2660f7/_result.png",
    alt: "หน้าจอระบบบริหารจัดการร้านทอง GoldDesk POS",
    year: "2023",
    challenge:
      "ร้านทองจดบันทึกซื้อขายในสมุดและ Excel ราคาทองเปลี่ยนทุกวัน ทำให้คิดเงินพลาด สต๊อกทองไม่ตรงกับหน้าร้าน และปิดบัญชีสิ้นวันใช้เวลานาน",
    solution:
      "สร้างโปรแกรมเดสก์ท็อปสำหรับหน้าร้าน ผูกราคาทองประจำวันเข้ากับบิลซื้อขายอัตโนมัติ ครอบคลุมขาย-รับซื้อคืน-จำนำ พร้อมรายงานสต๊อกและปิดยอดรายวันที่ตรวจสอบย้อนกลับได้ทุกบิล",
    features: [
      "ออกบิลขาย/รับซื้อคืนตามน้ำหนักและราคาทองประจำวันอัตโนมัติ",
      "สต๊อกทองแยกตามสาขา ตรวจนับและโอนย้ายระหว่างสาขาได้",
      "รายงานปิดยอดรายวัน กำไรขั้นต้น และประวัติลูกค้ารายบุคคล",
    ],
    results: [
      { value: "-70%", label: "เวลาปิดบัญชีสิ้นวัน" },
      { value: "100%", label: "บิลตรวจสอบย้อนกลับได้" },
      { value: "3", label: "สาขาใช้งานพร้อมกัน" },
    ],
  },
  {
    id: "pawnflow",
    name: "PawnFlow",
    client: "ร้านรับจำนำสินค้าทั่วไป",
    industry: "รับจำนำ / ซื้อ-ขายของมือสอง",
    platform: "Web App",
    cats: ["Web App", "การเงิน / สินเชื่อ"],
    tech: ["Nuxt 3", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image:
      "https://image.qwenlm.ai/generated-images/9d989856-5b28-405d-bf71-5bfcae85a593/_result.png",
    alt: "หน้าจอระบบร้านรับจำนำ PawnFlow",
    year: "2024",
    challenge:
      "ธุรกิจมีทั้งซื้อ ขาย ฝาก และจำนำในร้านเดียว แต่ใช้ใบเสร็จกระดาษ ติดตามวันครบกำหนดด้วยจำเอาเอง ทำให้ของหลุดจำนำตกหล่นและดอกเบี้ยคำนวณผิด",
    solution:
      "ออกแบบระบบเดียวที่รองรับงาน 4 รูปแบบในหน้าเดียว ทุกใบจำนำมีสถานะและเส้นตายชัดเจน ระบบแจ้งเตือนของใกล้หลุดโดยอัตโนมัติ พร้อมพิมพ์ตั๋วจำนำและป้ายสินค้าได้จากบิล",
    features: [
      "ออกตั๋วจำนำ/ซื้อ/ขาย/ฝาก ในเวิร์กโฟลว์เดียว พร้อมบาร์โค้ดบนตั๋ว",
      "คำนวณดอกเบี้ยตามจริงรายวัน เตือนของใกล้ครบกำหนดอัตโนมัติ",
      "หน้าขายของหลุดจำนำ เชื่อมสต๊อกหน้าร้านกับหน้าขายออนไลน์",
    ],
    results: [
      { value: "0", label: "ของหลุดจำนำตกหล่นหลังใช้งาน" },
      { value: "-50%", label: "เวลาทำรายการต่อใบ" },
      { value: "4-in-1", label: "รวม 4 รูปแบบงานในจอเดียว" },
    ],
  },
  {
    id: "loancore",
    name: "LoanCore",
    client: "ผู้ให้บริการสินเชื่อส่วนบุคคลถูกกฎหมาย",
    industry: "สินเชื่อออนไลน์",
    platform: "Web Admin + Mobile App",
    cats: ["Web App", "Mobile App", "การเงิน / สินเชื่อ"],
    tech: ["Flutter", "Nuxt 3", "Node.js", "PostgreSQL"],
    image:
      "https://image.qwenlm.ai/generated-images/caabd201-371b-430a-8784-390b68275f21/_result.png",
    alt: "หน้าจอเว็บแอดมินระบบสินเชื่อ LoanCore",
    year: "2024",
    challenge:
      "ลูกค้าสมัครกู้ผ่านแชททีละราย ทีมงานอนุมัติผ่านสเปรดชีต ไม่มีประวัติการชำระที่เชื่อถือได้ และตามทวงถามด้วยมือทั้งหมด",
    solution:
      "พัฒนาแอปมือถือฝั่งผู้กู้ให้สมัคร-อัปโหลดเอกสาร-ดูตารางผ่อนได้ด้วยตัวเอง คู่กับเว็บแอดมินฝั่งทีมสินเชื่อที่มีคิวอนุมัติ ระบบให้คะแนนความเสี่ยง และการแจ้งเตือนชำระอัตโนมัติ",
    features: [
      "ผู้กู้สมัครและติดตามสถานะได้เองบนแอป พร้อมตารางผ่อนรายงวด",
      "คิวอนุมัติบนเว็บแอดมิน พร้อม Risk Score และประวัติเอกสารครบ",
      "แจ้งเตือนครบกำหนดชำระอัตโนมัติทาง Push และ SMS",
    ],
    results: [
      { value: "3 วัน → 6 ชม.", label: "เวลาอนุมัติเฉลี่ย" },
      { value: "-35%", label: "ยอดชำระช้าเกินกำหนด" },
      { value: "2 แพลตฟอร์ม", label: "ซิงก์ข้อมูลกันแบบเรียลไทม์" },
    ],
  },
  {
    id: "biketrack",
    name: "BikeTrack",
    client: "ธุรกิจปล่อยกู้ค้ำประกันรถบิ๊กไบค์",
    industry: "สินเชื่อมีหลักประกัน",
    platform: "Mobile App (หลายผู้ใช้)",
    cats: ["Mobile App", "การเงิน / สินเชื่อ"],
    tech: ["Flutter", "Firebase", "Cloud Functions"],
    image:
      "https://image.qwenlm.ai/generated-images/d0af41cc-5669-40c5-ab6e-f3a0a6e808f8/_result.png",
    alt: "หน้าจอแอปติดตามธุรกิจปล่อยกู้ BikeTrack",
    year: "2023",
    challenge:
      "ทีมงานหลายคนที่ถือสัญญาและเก็บเงินคนละชุด ข้อมูลกระจายอยู่ในไลน์กลุ่มและสมุดจด ไม่รู้ว่าสัญญาไหนค้างชำระ หรือรถคันไหนอยู่ในความดูแลของใคร",
    solution:
      "สร้างแอปมือถือแบบหลายผู้ใช้ที่ทีมทั้งบริษัทใช้ร่วมกัน แยกบทบาทเจ้าของกิจการ/พนักงานเก็บเงิน เห็นสัญญากลางแบบเรียลไทม์ มอบหมายงานเก็บเงินรายวันและบันทึกการชำระหน้างานได้แม้เน็ตไม่เสถียร",
    features: [
      "สัญญากลางเรียลไทม์ เห็นสถานะรถทุกคันและยอดค้างทั้งพอร์ต",
      "มอบหมายรอบเก็บเงินรายวัน พร้อมบันทึกชำระแบบออฟไลน์ได้",
      "แยกบทบาทสิทธิ์: เจ้าของเห็นภาพรวม พนักงานเห็นเฉพาะงานของตน",
    ],
    results: [
      { value: "10+", label: "ผู้ใช้ทำงานพร้อมกัน" },
      { value: "-60%", label: "เวลาไล่เช็คสัญญาค้างชำระ" },
      { value: "เรียลไทม์", label: "ข้อมูลตรงกันทั้งทีม" },
    ],
  },
  {
    id: "scamshield",
    name: "ScamShield",
    client: "แพลตฟอร์มเพื่อสังคม — ตรวจสอบบัญชีมิจฉาชีพ",
    industry: "ความปลอดภัย / ภาคประชาสังคม",
    platform: "Web App",
    cats: ["Web App"],
    tech: ["Nuxt 3", "Supabase", "Edge Functions", "Tailwind CSS"],
    image:
      "https://image.qwenlm.ai/generated-images/7d567111-eaa5-4c8c-a7e9-7df80ebf6bcb/_result.png",
    alt: "หน้าจอแพลตฟอร์มแจ้งเตือนบัญชีมิจฉาชีพ ScamShield",
    year: "2025",
    challenge:
      "เหยื่อโอนเงินให้มิจฉาชีพเพราะตรวจสอบบัญชีปลายทางไม่ทัน ข้อมูลแจ้งเตือนกระจัดกระจายตามกลุ่มโซเชียลและค้นหาได้ยาก",
    solution:
      "สร้างแพลตฟอร์มกลางให้ประชาชนค้นหาเลขบัญชี/เบอร์พร้อมเพย์ก่อนโอนได้ในไม่กี่วินาที พร้อมระบบแจ้งเบาะแสที่มีขั้นตอนยืนยัน ลดข้อมูลเท็จ และแสดงระดับความเสี่ยงจากจำนวนรายงานสะสม",
    features: [
      "ค้นหาเลขบัญชีและเบอร์พร้อมเพย์ แสดงระดับความเสี่ยงทันที",
      "แจ้งเบาะแสพร้อมหลักฐาน มีขั้นตอนกลั่นกรองก่อนเผยแพร่",
      "หน้าสถิติภาพรวมการรายงาน แยกตามธนาคารและรูปแบบกลโกง",
    ],
    results: [
      { value: "< 5 วิ", label: "เวลาตรวจสอบต่อครั้ง" },
      { value: "10,000+", label: "เลขบัญชีในฐานข้อมูล" },
      { value: "สาธารณะ", label: "เปิดให้ใช้ฟรี ไม่มีค่าใช้จ่าย" },
    ],
  },
  {
    id: "toeicprep",
    name: "TOEIC Sprint",
    client: "ติวเตอร์อิสระ — เตรียมสอบ TOEIC",
    industry: "การศึกษา / ทักษะภาษา",
    platform: "Web App",
    cats: ["Web App", "การศึกษา"],
    tech: ["HTML", "JavaScript", "CSS", "LocalStorage"],
    image:
      "https://image.qwenlm.ai/generated-images/730e0976-ad1e-4b9a-ae1e-cc89a93ae46b/_result.png",
    alt: "หน้าจอแอปติว TOEIC Sprint",
    year: "2022",
    challenge:
      "นักเรียนของติวเตอร์ต้องฝึกทำข้อสอบจำลองจากกระดาษ จับเวลาเอง และไม่รู้จุดอ่อนของตัวเอง ทำให้คะแนนจริงไม่พัฒนาเท่าที่ควร",
    solution:
      "พัฒนาเว็บแอปข้อสอบจำลอง TOEIC ที่จับเวลาเหมือนสนามจริง ตรวจให้คะแนนตามสเกล TOEIC และสรุปจุดอ่อนรายพาร์ต พร้อมคลังศัพท์ที่บันทึกprogressไว้ในเครื่องโดยไม่ต้องมีเซิร์ฟเวอร์",
    features: [
      "ข้อสอบจำลองจับเวลาเต็มรูปแบบ ตรวจคะแนนตามสเกล TOEIC",
      "วิเคราะห์จุดอ่อนแยก Listening / Reading รายพาร์ต",
      "ทำงานได้ทั้งหมดบนเบราว์เซอร์ บันทึกความคืบหน้าในเครื่อง",
    ],
    results: [
      { value: "300+", label: "นักเรียนใช้งานสะสม" },
      { value: "0 บาท", label: "ค่าเซิร์ฟเวอร์ (client-side ทั้งหมด)" },
      { value: "+120", label: "คะแนนเฉลี่ยที่นักเรียนทำได้เพิ่ม" },
    ],
  },
];

/* ── บริการ ───────────────────────────────────────────────── */

export type Service = {
  no: string;
  title: string;
  desc: string;
  tags: string[];
  icon: "globe" | "gauge" | "device" | "coins";
};

export const SERVICES: Service[] = [
  {
    no: "01",
    title: "เว็บไซต์ธุรกิจและเว็บองค์กร",
    desc: "เว็บบริษัท เว็บสินค้า และแลนดิ้งเพจที่ออกแบบใหม่ตามแบรนด์ โหลดเร็ว ติด SEO และเป็นหน้าร้านดิจิทัลที่น่าเชื่อถือตั้งแต่วันแรก",
    tags: ["Landing Page", "Corporate Site", "SEO-ready"],
    icon: "globe",
  },
  {
    no: "02",
    title: "ระบบ Back-office ภายในองค์กร",
    desc: "ระบบบริหารจัดการภายในที่ตัดงานซ้ำซากออก — ใบอนุมัติ สต๊อก รายงาน และแดชบอร์ดที่ออกแบบตามเวิร์กโฟลว์จริงของทีมงานคุณ",
    tags: ["Dashboard", "Approval Flow", "Report"],
    icon: "gauge",
  },
  {
    no: "03",
    title: "โมบายแอปพลิเคชัน",
    desc: "แอป iOS / Android สำหรับลูกค้าหรือทีมภาคสนาม ใช้งานได้ลื่นทั้งออนไลน์และออฟไลน์ พร้อมระบบแจ้งเตือนและซิงก์ข้อมูลกลาง",
    tags: ["iOS / Android", "Flutter", "Push Notification"],
    icon: "device",
  },
  {
    no: "04",
    title: "ระบบร้านค้าและการเงิน",
    desc: "POS ร้านค้า ระบบสินเชื่อ รับจำนำ ค้ำประกัน — งานที่ตัวเลขต้องแม่นทุกบิล เราออกแบบรอบเงิน ตรวจสอบย้อนกลับได้ และปิดยอดได้จริง",
    tags: ["POS", "สินเชื่อ / รับจำนำ", "ปิดยอดรายวัน"],
    icon: "coins",
  },
];

export const DIFFERENTIATORS = [
  {
    icon: "puzzle" as const,
    title: "สั่งตัด 100% ไม่ใช่เทมเพลต",
    desc: "เริ่มจากโจทย์ธุรกิจของคุณทุกครั้ง ไม่มีธีมสำเร็จรูปมาครอบแล้วบอกว่านั่นคือระบบของคุณ",
  },
  {
    icon: "pen" as const,
    title: "UX/UI ที่คนหน้างานใช้ได้ทันที",
    desc: "ทำ prototype ให้ทีมคุณลองจับของจริงก่อนเขียนโค้ด ลดงานแก้ทีหลัง และทำให้ระบบถูกใช้จริงไม่ใช่ถูกทิ้ง",
  },
  {
    icon: "shield" as const,
    title: "ปลอดภัย ส่งมอบเป็น และขยายต่อได้",
    desc: "โครงสร้างโค้ดชัดเจน มีเอกสารส่งมอบ เลือกสแต็กที่เหมาะกับงบ และออกแบบให้ฟีเจอร์ใหม่ต่อเพิ่มได้โดยไม่รื้อระบบ",
  },
];

/* ── เทคโนโลยี ────────────────────────────────────────────── */

export type TechItem = { name: string; group: "Frontend" | "Backend & Data" | "Mobile & Desktop" | "Infra & Tools" };

export const TECH_ITEMS: TechItem[] = [
  { name: "Nuxt 3", group: "Frontend" },
  { name: "Vue 3", group: "Frontend" },
  { name: "TypeScript", group: "Frontend" },
  { name: "Tailwind CSS", group: "Frontend" },
  { name: "Node.js", group: "Backend & Data" },
  { name: "Supabase", group: "Backend & Data" },
  { name: "PostgreSQL", group: "Backend & Data" },
  { name: "Firebase", group: "Backend & Data" },
  { name: "Flutter", group: "Mobile & Desktop" },
  { name: "Electron", group: "Mobile & Desktop" },
  { name: ".NET", group: "Mobile & Desktop" },
  { name: "REST API", group: "Backend & Data" },
  { name: "Vercel", group: "Infra & Tools" },
  { name: "GitHub Actions", group: "Infra & Tools" },
];

export const TECH_GROUPS = [
  {
    title: "Frontend",
    desc: "Nuxt 3 · Vue · TypeScript · Tailwind — เว็บเร็ว คะแนน Lighthouse เขียว",
  },
  {
    title: "Backend & Data",
    desc: "Node.js · Supabase · PostgreSQL · Firebase — ข้อมูลแม่น ปลอดภัย ขยายได้",
  },
  {
    title: "Mobile & Deploy",
    desc: "Flutter · .NET · Vercel — ครบทั้งแอปมือถือและเดสก์ท็อป พร้อม CI/CD",
  },
];

/* ── กระบวนการทำงาน ───────────────────────────────────────── */

export const PROCESS = [
  {
    step: "01",
    title: "Discovery",
    thai: "คุยให้ลึกถึงโจทย์",
    desc: "สัมภาษณ์คนหน้างานจริง ทำความเข้าใจเวิร์กโฟลว์และตัวเลขที่เกี่ยวข้อง ก่อนเสนอขอบเขตและงบที่ชัดเจน",
    dur: "สัปดาห์ 1",
  },
  {
    step: "02",
    title: "Design",
    thai: "ออกแบบให้เห็นก่อน",
    desc: "ทำ UX flow และ prototype ที่คลิกทดลองได้ ทีมคุณคอมเมนต์ได้ก่อนพัฒนาจริงทุกหน้าจอ",
    dur: "สัปดาห์ 2–3",
  },
  {
    step: "03",
    title: "Build",
    thai: "พัฒนาและทดสอบ",
    desc: "พัฒนาเป็นรอบสั้น ๆ โชว์ความคืบหน้าทุกสัปดาห์ พร้อมทดสอบกับข้อมูลจริงของธุรกิจคุณ",
    dur: "สัปดาห์ 4–8",
  },
  {
    step: "04",
    title: "Launch & Care",
    thai: "ขึ้นระบบและดูแลต่อ",
    desc: "Deploy, อบรมทีมของคุณ, ส่งมอบเอกสารครบ และดูแลต่อตามแพ็กเกจที่ตกลงกัน",
    dur: "ต่อเนื่อง",
  },
];

/* ── สถิติ ───────────────────────────────────────────────── */

export const STATS = [
  { to: 7, suffix: "+", label: "ระบบที่ส่งมอบแล้ว" },
  { to: 6, suffix: "+", label: "อุตสาหกรรมที่ทำงานด้วย" },
  { to: 3, suffix: "+", label: "ปีประสบการณ์พัฒนา" },
  { to: 100, suffix: "%", label: "พัฒนาแบบสั่งตัด" },
];

/* ── ช่องทางติดต่อ ────────────────────────────────────────── */

export const CONTACT = {
  line: { label: "LINE Official", handle: "@wellinbox", url: "https://lin.ee/wellinbox" },
  phone: { label: "โทรศัพท์", handle: "089-123-4567", url: "tel:+66891234567" },
  email: { label: "อีเมล", handle: "hello@wellinbox.com", url: "mailto:hello@wellinbox.com" },
  facebook: { label: "Facebook", handle: "wellinbox.studio", url: "https://facebook.com/wellinbox.studio" },
  github: { label: "GitHub", handle: "wellinbox", url: "https://github.com/wellinbox" },
};

export const NAV_LINKS = [
  { href: "#services", label: "บริการ" },
  { href: "#portfolio", label: "ผลงาน" },
  { href: "#tech", label: "เทคโนโลยี" },
  { href: "#process", label: "กระบวนการ" },
  { href: "#contact", label: "ติดต่อ" },
];

/* ── SEO: คีย์เวิร์ดที่ครอบคลุมธุรกิจ (ใช้ในหน้า sitemap) ──
   แก้ไข/เพิ่มคำค้นหาใหม่ได้จากที่นี่ที่เดียว                */

export type KeywordGroup = {
  group: string;
  href: string;
  items: string[];
};

export const SEO_KEYWORDS: KeywordGroup[] = [
  {
    group: "เว็บไซต์",
    href: "#services",
    items: [
      "รับทำเว็บไซต์บริษัท",
      "รับทำเว็บองค์กร",
      "รับทำ Landing Page",
      "เว็บโหลดเร็ว ติด SEO",
      "ปรับโฉมเว็บเก่า",
    ],
  },
  {
    group: "ระบบธุรกิจเฉพาะทาง",
    href: "#portfolio",
    items: [
      "รับทำระบบ POS",
      "ระบบร้านทอง",
      "ระบบรับจำนำ",
      "ระบบสินเชื่อออนไลน์",
      "ระบบปล่อยกู้ค้ำประกัน",
      "ระบบ back-office",
      "ระบบอนุมัติเอกสาร",
      "ระบบแสดงผลสอบ / สถานศึกษา",
    ],
  },
  {
    group: "โมบายแอป",
    href: "#portfolio",
    items: [
      "รับทำแอปมือถือ",
      "แอป iOS / Android",
      "แอป Flutter",
      "แอปทีมภาคสนาม",
      "แอปแจ้งเตือนลูกค้า",
    ],
  },
  {
    group: "เทคโนโลยี & บริการเสริม",
    href: "#tech",
    items: [
      "Nuxt 3 Developer",
      "Supabase Development",
      "Node.js API",
      "ออกแบบ UX/UI",
      "ที่ปรึกษาวางระบบ",
      "ดูแลระบบหลังส่งมอบ",
    ],
  },
];

/* ── SEO: เช็กลิสต์เชิงเทคนิค (แสดงในหน้า sitemap) ──────── */

export const SEO_CHECKLIST = [
  { file: "index.html", item: "Title + Meta description ภาษาไทย ครอบคลุมคีย์เวิร์ดหลัก" },
  { file: "index.html", item: "Meta keywords + robots index,follow + canonical" },
  { file: "index.html", item: "Open Graph + Twitter Card พร้อมภาพ banner 1200×630" },
  { file: "index.html", item: "JSON-LD schema (ProfessionalService + knowsAbout)" },
  { file: "/robots.txt", item: "อนุญาต crawler ทุกตัว และชี้ไปที่ sitemap" },
  { file: "/sitemap.xml", item: "รายการ URL ทุก section พร้อม priority / changefreq" },
];
