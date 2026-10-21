/**
 * ملف boos — كل محتوى الموقع هنا بس.
 *
 * - الروابط: socials (إنستجرام، تيك توك، واتساب، فيسبوك، لينكدإن)
 * - الصور: حط صورك في مجلد public واكتب مساراتها مثل "/hero.jpg"
 * - الباقات والفيديوهات والجاليري: عدّل القوائم على طول
 *
 * سيب أي رابط فاضي = الايقونة هتظهر مطفية (مش نشطة) لحد ما تملاه.
 */

export type SocialKey = "instagram" | "tiktok" | "whatsapp" | "facebook" | "linkedin";

/** روابط السوشيال ميديا — ضع روابطك هنا. */
export const socials: Record<SocialKey, string> = {
  instagram: "", // مثال: "https://www.instagram.com/coachbossy"
  tiktok: "", // مثال: "https://www.tiktok.com/@coachbossy"
  whatsapp: "", // مثال: "201000000000" (بالكود الدولي وبدون +)
  facebook: "", // مثال: "https://www.facebook.com/coachbossy"
  linkedin: "", // مثال: "https://www.linkedin.com/in/coachbossy"
};

/** رقم الواتساب في ملف boos.ts بيتحول لرابط wa.me مباشر. */
export function whatsappHref(number: string): string {
  const digits = number.replace(/[^\d]/g, "");
  return digits ? `https://wa.me/${digits}` : "";
}

/** اسم الكوتش — بيفتح الصفحة من فوق لما تدوس عليه في الهيدر. */
export const brandName = "Coach Bossy";


export type PackageItem = {
  id: number;
  name: string;
  /** الاسم بالعربي (اختياري) — لو سيبته فاضي بيظهر الاسم الإنجليزي. */
  nameAr?: string;
  price: string;
  duration: string;
  durationAr?: string;
  popular: boolean;
  features: string[];
  featuresAr?: string[];
};

export type VideoItem = {
  id: number;
  title: string;
  titleAr?: string;
  category: string;
  categoryAr?: string;
  description: string;
  descriptionAr?: string;
  /** رابط YouTube أو Instagram أو ملف MP4 مباشرة. */
  url: string;
  thumb: string;
};

export type GalleryItem = {
  id: number;
  src: string;
  alt: string;
};

export const site = {
  name: "Coach Bossy",
  /** الاسم اللي بيظهر في الماركيز المتحرك (إنجليزي/عربي). */
  marquee: ["STRONG", "FIT", "DISCIPLINE", "NO EXCUSES"],
  marqueeAr: ["قوة", "لياقة", "التزام", "مفيش أعذار"],
  tagline:
    "Train smart, stay consistent, and become unstoppable. Personal programs built around your body and your life.",
  taglineAr: "اتمرن بذكاء، وخليك ملتزم، وابقى لا تتوقف. برامج شخصية مبنية على جسمك وحياتك.",
  about:
    "I'm Bossy — a REPs UAE certified fitness coach. I build programs that fit real life: home or gym, beginner or athlete.\n\nEvery plan comes with clear workouts, nutrition guidance, and weekly check-ins to keep you honest and moving forward.",
  aboutAr:
    "أنا بوسي — كوتش لياقة معتمدة من REPs الإمارات. بعمل برامج تناسب الحياة الحقيقية: في البيت أو الجيم، مبتدئة أو رياضية.\n\nكل برنامج بييجي معه تمارين واضحة، وإرشادات تغذية، ومتابعة أسبوعية تخليكي ملتزمة وتتقدمي.",
  /** صورة الهيرو (4:5) — رفعها في مجلد public وحط المسار هنا. */
  heroPhoto: "",
  /** صورة قسم About (5:4). */
  aboutPhoto: "",
  stats: {
    clients: 250,
    years: 6,
    programs: 40,
  },
  /** رقم فودافون كاش (نسخ الرقم في صفحة الباقات). */
  vodafone: "",
  /** صورة QR الخاصة بـ InstaPay — ارفعها في public وحط مسارها هنا. */
  instapayQr: "",
};

export const packages: PackageItem[] = [
  {
    id: 1,
    name: "Starter",
    price: "1,200 EGP",
    duration: "1 Month",
    durationAr: "شهر",
    popular: false,
    features: [
      "Custom workout plan",
      "Nutrition guide",
      "Weekly check-in",
      "WhatsApp support",
    ],
    featuresAr: ["برنامج تمارين مخصص", "دليل تغذية", "متابعة أسبوعية", "دعم على واتساب"],
  },
  {
    id: 2,
    name: "Pro",
    price: "3,000 EGP",
    duration: "3 Months",
    durationAr: "٣ شهور",
    popular: true,
    features: [
      "Custom workout plan",
      "Macro-based nutrition",
      "Form check videos",
      "Twice-a-week check-ins",
      "WhatsApp support",
    ],
    featuresAr: [
      "برنامج تمارين مخصص",
      "تغذية مبنية على الماكروز",
      "فيديوهات تصحيح الأداء",
      "متابعة مرتين في الأسبوع",
      "دعم على واتساب",
    ],
  },
  {
    id: 3,
    name: "Elite",
    price: "5,500 EGP",
    duration: "6 Months",
    durationAr: "٦ شهور",
    popular: false,
    features: [
      "Everything in Pro",
      "Monthly video calls",
      "Competition prep",
      "Priority support",
    ],
    featuresAr: ["كل حاجة في باقة Pro", "مكالمات فيديو شهريًا", "تحضير للمسابقات", "دعم بأولوية"],
  },
];

export const gallery: GalleryItem[] = [
  { id: 1, src: "", alt: "Training session" },
  { id: 2, src: "", alt: "Progress photo" },
  { id: 3, src: "", alt: "Gym workout" },
  { id: 4, src: "", alt: "Coaching" },
  { id: 5, src: "", alt: "Stretching" },
  { id: 6, src: "", alt: "Results" },
];

export const videos: VideoItem[] = [
  {
    id: 1,
    title: "Full body warm up",
    titleAr: "تسخين لكل الجسم",
    category: "Exercises",
    categoryAr: "تمارين",
    description: "Five minutes to prepare your body for any workout.",
    descriptionAr: "خمس دقايق تجهّز بيهم جسمك لأي تمرين.",
    url: "",
    thumb: "",
  },
  {
    id: 2,
    title: "High protein meal prep",
    titleAr: "تحضير وجبات عالية البروتين",
    category: "Nutrition",
    categoryAr: "تغذية",
    description: "Simple meals that hit your macros without extra stress.",
    descriptionAr: "وجبات بسيطة توصّلك للماكروز من غير تعب زيادة.",
    url: "",
    thumb: "",
  },
  {
    id: 3,
    title: "Squat form fixes",
    titleAr: "تصحيح أداء السكوات",
    category: "Tips",
    categoryAr: "نصائح",
    description: "The three mistakes that break most squats.",
    descriptionAr: "التلات أخطاء اللي بتخرّب أغلب السكوات.",
    url: "",
    thumb: "",
  },
];
