import "@/styles/globals.css";
import localFont from "next/font/local";

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

function App({ Component, pageProps }) {
  return (
    <div className={unbounded.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
