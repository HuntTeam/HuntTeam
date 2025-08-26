export const metadata = {
  title: {
    template: "%s | HuntTeam",
    default: "HuntTeam – креативная веб-студия из Абакана, Хакасия",
  },
  description:
    "HuntTeam – креативная веб-студия из Абакана, Хакасия. Разрабатываем сайты, веб-приложения, Telegram-боты, логотипы и рекламный дизайн с уникальным стилем и эффективным SEO.",
  keywords:
    "HuntTeam, веб-студия, Абакан, Хакасия, сайты, веб-приложения, Telegram-боты, логотип, дизайн, digital, разработка сайтов, SEO",
  authors: [{ name: "HuntTeam Production" }],
  openGraph: {
    title: "HuntTeam – веб-студия из Абакана",
    description:
      "Креативные веб-продукты для бизнеса: сайты, веб-приложения, Telegram-боты, логотипы и дизайн.",
    url: "https://huntteam.ru",
    siteName: "HuntTeam",
    type: "website",
    images: [
      {
        url: "/opengraph-image-1200x630.jpg", // для десктопа
        width: 1200,
        height: 630,
      },
      {
        url: "/opengraph-image-800x418.jpg", // для планшетов
        width: 800,
        height: 418,
      },
      {
        url: "/opengraph-image-400x209.jpg", // для мобильных
        width: 400,
        height: 209,
      },
    ],
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "HuntTeam – веб-студия из Абакана",
    description:
      "Цифровые решения: сайты, веб-приложения, Telegram-боты, логотипы.",
    images: ["/twitter-image-800x418.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon-32x32.png",
    apple: "/apple-icon.png",
    other: [{ rel: "icon", url: "/icon-192x192.png", sizes: "192x192" }],
    metadataBase: new URL("https://huntteam.ru"),
    alternates: {
      canonical: "https://huntteam.ru",
    },
    additionalMetaTags: [
      { name: "robots", content: "index, follow" },
      { name: "author", content: "HuntTeam Production" },
    ],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "HuntTeam",
      image: "https://huntteam.ru/opengraph-image.jpg",
      "@id": "https://huntteam.ru",
      url: "https://huntteam.ru",
      telephone: "+7-XXX-XXX-XX-XX",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Абакан",
        addressRegion: "Хакасия",
        postalCode: "655000",
        addressCountry: "RU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 53.72,
        longitude: 91.45,
      },
      sameAs: [
        "https://t.me/HuntTeam",
        "https://vk.com/HuntTeam",
        "https://instagram.com/HuntTeam",
      ],
    },
  },
};
