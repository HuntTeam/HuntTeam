import Teatr from "./components/Teatr";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import About from "./components/About";
import Uslugi from "./components/Uslugi";
import Footer from "./components/Footer";
import Works from "./components/Works";
import While from "./components/While";
import Request from "./components/Request";
import { metadata } from "./metadata";
import Header from "./components/Header";
export { metadata };
export default function Home() {
  return (
    <>
      <Header />
      <main style={{ background: "black" }}>
        <CTA />
        <About />
        <Hero />
        <Uslugi />
        <Works />
        <While />
        <Request />
        <Teatr />
      </main>
      <Footer />
    </>
  );
}
