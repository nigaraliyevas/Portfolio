export const skills = {
  "backend // arxa tərəf": [
    "C#", ".NET Core", "ASP.Net Core API", "Entity Framework Core",
    "SignalR", "JWT", "REST API", "ASP.NET MVC", "MS SQL Server",
    "Design Patterns", "Python", "FastAPI", "Django",
  ],
  "frontend // ön tərəf": [
    "HTML5", "CSS3", "JavaScript", "jQuery", "ReactJS",
    "Sass", "Tailwind CSS", "Bootstrap",
  ],
  "alətlər": ["GitHub", "Agile", "JIRA"],
};

export const projects = [
  {
    num: "01", title: "InnoKapital", url: "https://innokapital.az/az/",
    stack: ["ASP.NET Core", "MS SQL Server", "REST API"],
    desc: "Maliyyə şirkəti üçün korporativ vebsayt — backend API inteqrasiyası və verilənlər bazası idarəetməsi.",
  },
  {
    num: "02", title: "Oksijen Zone Hotel", url: "https://oksijenzone.com/tr/",
    stack: ["C#", ".NET", "Entity Framework"],
    desc: "Türkiyədəki otel üçün çoxdilli korporativ platforma — rezervasiya sistemi və admin panel.",
  },
  {
    num: "03", title: "Macara Sheki City Hotel", url: "https://sheki.macaraclub.az/en/sheki-hotel/",
    stack: ["ASP.NET Core API", "MS SQL Server"],
    desc: "Şəki şəhərindəki butik otel üçün backend infrastrukturu — otaq idarəetməsi və booking API.",
  },
  {
    num: "04", title: "Center Hotel Baku", url: "https://centerhotelbaku.com/",
    stack: [".NET", "REST API", "SQL Server"],
    desc: "Bakı mərkəzindəki otel üçün tam backend həlli — RESTful API və verilənlər bazası arxitekturası.",
  },
  {
    num: "05", title: "Meeting Point", url: "https://meetings.pmsystems.az/login",
    stack: ["ASP.NET Core", "SignalR", "JWT", "MS SQL Server"],
    desc: "İclasların planlaşdırılması üçün real-time platforma — JWT autentifikasiya və SignalR inteqrasiyası.",
  },
  {
    num: "06", title: "Macara Lake Park & Village Resort", url: "https://macaraclub.az/",
    stack: ["C#", ".NET Core", "Entity Framework", "REST API"],
    desc: "Böyük resort kompleksi üçün tam backend — çoxlu otel, villa və aktivlik idarəetmə sistemi.",
  },
  {
    num: "07", title: "ENOR Holding", url: null, comingSoon: true,
    stack: [".NET Core", "MS SQL Server"],
    desc: "Holdinq şirkəti üçün korporativ platforma — hazırda işlənmə mərhələsindədir.",
  },
];

export const experience = [
  {
    company: "Project Management Systems", role: "Backend Developer", period: "Okt 2025 –",
    desc: "Vebsayt üçün API-lərin qurulması və verilənlər bazası ilə bağlı əsas əməliyyatların icrasını həyata keçirmişəm. Tapşırıqları vaxtında yerinə yetirmişəm.",
  },
  {
    company: "SOCAR İTRİ", role: "Developer", period: "Fev 2025 – İyul 2025",
    desc: "Veb layihə üçün backend funksionallıqlarının hazırlanması, API-lərin qurulması və verilənlər bazası ilə bağlı əsas əməliyyatların icrasını həyata keçirmişəm.",
  },
  {
    company: "NVAilesi", role: ".NET Backend Developer", period: "Fev 2025 – May 2025",
    desc: "Vebsaytın backend hissəsini .NET texnologiyasından istifadə edərək hazırlamışam. RESTful API-lər yazaraq frontend ilə inteqrasiyanı təmin etmişəm. MS SQL Server-dən istifadə edərək məlumatların saxlanılması və idarə olunmasını həyata keçirmişəm.",
  },
  {
    company: "Evo Academy", role: "Frontend Developer Təcrübəçi", period: "Avq 2024 – Yan 2025",
    desc: "Kompüter avadanlıqlarının satışı üçün vebsaytın hazırlanması zamanı Figma dizaynlarına əsaslanaraq React.js ilə frontend inkişafını həyata keçirmişəm.",
  },
  {
    company: "4SIM", role: "Frontend Developer Təcrübəçi", period: "May 2024 – Avq 2024",
    desc: "Mobil tətbiqin idarə olunması üçün JavaScript-dən istifadə edərək admin panelin hazırlanmasını həyata keçirmişəm.",
  },
  {
    company: "Nərimanov Rayon Bələdiyyəsi", role: "Kompüter Operatoru", period: "Avq 2021 – Okt 2024",
    desc: "Vergilərin hesablanması və daxil edilməsi, arayışların hazırlanmasını həyata keçirmişəm.",
  },
];

export const education = [
  { school: "Azərbaycan Universiteti", degree: "Kompüter Mühəndisliyi — Bakalavr", period: "2021 – 2025", icon: "🎓" },
  { school: "Code Academy", degree: "Fullstack Proqramlaşdırma", period: "2023 – 2024", icon: "💻" },
  { school: "ADNSU nəzdində Sənaye və Texnologiya Kolleci", degree: "Kompüter Şəbəkələri", period: "2018 – 2021", icon: "🌐" },
];

export const certs = [
  "ICPC – International Collegiate Programming Contest Honorable Mention",
  "C4IR – Frontend Developer",
  "Evo Academy – Diplom Frontend Developer",
  "Evo Academy – Diplom Agile Scrum Master Proqramı",
];

export const langs = [
  { code: "AZ", name: "Azərbaycan", level: "Ana dili", flag: "🇦🇿" },
  { code: "EN", name: "İngilis", level: "Peşəkar", flag: "🇬🇧" },
  { code: "ES", name: "İspan", level: "Öyrənmə", flag: "🇪🇸" },
];

export const multiWords = [
  ["vaxt", "time", "tiempo"],
  ["yavaş", "slow", "lento"],
  ["kod", "code", "código"],
  ["inşa", "build", "construir"],
  ["yaşa", "live", "vivir"],
];

export const navItems = [
  { id: "home",       label: "Əsas" },
  { id: "about",      label: "Haqqımda" },
  { id: "skills",     label: "Bacarıqlar" },
  { id: "projects",   label: "Layihələr" },
  { id: "experience", label: "Təcrübə" },
  { id: "education",  label: "Təhsil" },
  { id: "contact",    label: "Əlaqə" },
];

export const heroTags = ["C#", ".NET", "Python", "FastAPI", "Django", "SQL"];

export const decoSymbols = ["{ }", "//", "=>", "null", "await", "async", "var", "new"];

export const workStyle = [
  "🐢 sakit & davamlı",
  "⏳ vaxt şüurlu",
  "🔗 API-first",
  "🧩 dizayn nümunələri",
  "🌍 çoxdilli düşünən",
];

export const contactLinks = [
  { icon: "📞", label: "+994 50 213 82 55", href: "tel:+994502138255" },
  { icon: "✉️", label: "nigaraliyevas@outlook.com", href: "mailto:nigaraliyevas@outlook.com" },
  { icon: "💼", label: "Nigar Aliyeva @ LinkedIn", href: "https://linkedin.com/in/nigar-aliyeva" },
  { icon: "🐙", label: "nigaraliyevas @ GitHub", href: "https://github.com/nigaraliyevas" },
];
