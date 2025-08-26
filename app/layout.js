import localFont from "next/font/local";
import "./global.css";
import { metadata } from "./metadata";
import Script from "next/script";
export { metadata };

const unbounded = localFont({
  src: [
    {
      path: "../font/Unbounded/static/Unbounded-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../font/Unbounded/static/Unbounded-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../font/Unbounded/static/Unbounded-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/Unbounded/static/Unbounded-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../font/Unbounded/static/Unbounded-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../font/Unbounded/static/Unbounded-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../font/Unbounded/static/Unbounded-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../font/Unbounded/static/Unbounded-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={unbounded.className}>
        {children}
        <Script id="section-scroll" strategy="afterInteractive">
          {`
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Скролл к началу секции
            entry.target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
      }
    );

    sections.forEach(section => observer.observe(section));
  `}
        </Script>
      </body>
    </html>
  );
}
