/**
 * ملف اللغة — كل النصوص العربية والإنجليزية هنا.
 * لو عايز تغيّر أي كلمة في أي لغة، غيّرها من الملف ده بس.
 */

export type Lang = "en" | "ar";

type Dict = {
  nav: { home: string; about: string; gallery: string; tips: string; packages: string };
  langLabel: string;
  hero: { badge: string; cta: string; scroll: string };
  about: { title: string; body: string };
  gallery: { title: string };
  videos: { title: string; subtitle: string; empty: string };
  packages: {
    title: string;
    subtitle: string;
    popular: string;
    instapay: string;
    vodafone: string;
    qrPlaceholder: string;
    qrHint: string;
    numberPlaceholder: string;
    copy: string;
    copied: string;
    cashHint: string;
    sendProof: string;
  };
  stats: { clients: string; years: string; programs: string };
  social: { title: string; hint: string };
  footerRights: string;
};

export const dict: Record<Lang, Dict> = {
  en: {
    nav: { home: "Home", about: "About", gallery: "Gallery", tips: "Tips", packages: "Packages" },
    langLabel: "العربية",
    hero: {
      badge: "REPs UAE certified",
      cta: "See packages",
      scroll: "Scroll",
    },
    about: { title: "About", body: "" },
    gallery: { title: "Gallery" },
    videos: {
      title: "Explanations and tips",
      subtitle: "Short videos on training, nutrition, and form.",
      empty: "Video",
    },
    packages: {
      title: "Packages",
      subtitle:
        "Pay with InstaPay or Vodafone Cash, then send the screenshot. The coach confirms the subscription herself.",
      popular: "Most popular",
      instapay: "InstaPay",
      vodafone: "Vodafone Cash",
      qrPlaceholder: "QR goes here",
      qrHint: "Scan the QR in the InstaPay app, pay, then send the transfer screenshot on WhatsApp.",
      numberPlaceholder: "Number goes here",
      copy: "Copy number",
      copied: "Copied",
      cashHint: "Transfer the amount to this number, then send the screenshot on WhatsApp.",
      sendProof: "Send proof on WhatsApp",
    },
    stats: { clients: "Clients", years: "Years", programs: "Programs" },
    social: { title: "Follow me", hint: "Add your links in boos.ts" },
    footerRights: "All rights reserved.",
  },
  ar: {
    nav: { home: "الرئيسية", about: "من أنا", gallery: "الصور", tips: "نصائح", packages: "الباقات" },
    langLabel: "English",
    hero: {
      badge: "معتمدة من REPs الإمارات",
      cta: "شوف الباقات",
      scroll: "انزل",
    },
    about: { title: "من أنا", body: "" },
    gallery: { title: "معرض الصور" },
    videos: {
      title: "شرح ونصائح",
      subtitle: "فيديوهات قصيرة عن التمرين والتغذية والأداء الصحيح.",
      empty: "فيديو",
    },
    packages: {
      title: "الباقات",
      subtitle: "ادفع بإنستاباي أو فودافون كاش، وبعدين ابعت صورة التحويل. الكوتش بتأكد الاشتراك بنفسها.",
      popular: "الأكثر طلبًا",
      instapay: "إنستاباي",
      vodafone: "فودافون كاش",
      qrPlaceholder: "الـ QR هنا",
      qrHint: "امسح الكود من تطبيق إنستاباي، ادفع، وبعدين ابعت صورة التحويل على واتساب.",
      numberPlaceholder: "الرقم هنا",
      copy: "انسخ الرقم",
      copied: "تم النسخ",
      cashHint: "حوّل المبلغ على الرقم ده، وبعدين ابعت صورة التحويل على واتساب.",
      sendProof: "ابعت الإثبات على واتساب",
    },
    stats: { clients: "عميل", years: "سنين خبرة", programs: "برنامج" },
    social: { title: "تابعني", hint: "حط روابطك في ملف boos.ts" },
    footerRights: "جميع الحقوق محفوظة.",
  },
};
