const ur = {
  common: {
    ok: "ٹھیک ہے!",
    cancel: "منسوخ کریں",
    back: "واپس جائیں",
    changeLanguage: "زبان تبدیل کریں",
    darkMode: "ڈارک موڈ",
    theme: "تھیم",
    reviews: "جائزے",
    retry: "دوبارہ کوشش کریں",
  },
  routes: {
    home: "ہوم",
    settings: "ترتیبات",
    productsList: "مصنوعات کی فہرست",
    productDetails: "مصنوعات کی تفصیل",
  },
  productDetails: {
    addtoCart: "کارٹ میں شامل کریں",
    checkOut: "ابھی چیک آؤٹ کریں",
  },
  welcomeScreen: {
    postscript:
      "پسٹ — شاید آپ کی ایپ ایسی نہیں لگتی۔ (اگر آپ کے ڈیزائنر نے یہ اسکرینز دی ہیں تو فوراً شِپ کریں!)",
    readyForLaunch: "آپ کی ایپ تقریباً لانچ کے لیے تیار ہے!",
    exciting: "(اوہ، یہ تو دلچسپ ہے!)",
  },
  errorScreen: {
    title: "کچھ غلط ہوگیا!",
    friendlySubtitle:
      "یہ وہ اسکرین ہے جو آپ کے صارفین کو دکھائی دے گی جب ایپ میں کوئی خرابی آجائے۔ آپ اس پیغام کو (جو `app/i18n/ur.ts` میں ہے) اپنی مرضی سے تبدیل کر سکتے ہیں، اور لے آؤٹ (`app/screens/ErrorScreen`) کو بھی۔ اگر آپ اسے مکمل طور پر ہٹانا چاہتے ہیں تو `app/app.tsx` میں <ErrorBoundary> کمپوننٹ چیک کریں۔",
    reset: "ایپ ری سیٹ کریں",
  },
  emptyStateComponent: {
    generic: {
      heading: "بہت خالی... بہت اداس 😢",
      content:
        "ابھی تک کوئی ڈیٹا دستیاب نہیں۔ ریفریش کرنے یا ایپ دوبارہ لوڈ کرنے کے لیے بٹن دبائیں۔",
      button: "پھر سے کوشش کریں",
    },
  },
}

export default ur
export type Translations = typeof ur
