import Footer from "@/components/Footer";
import OpacityPrice from "./components/OpacityPrice";
import Header from "@/components/Header";

export default function Services() {
  return (
    <>
      <Header />

      <main style={{ background: "black" }}>
        <OpacityPrice />
      </main>
      <Footer />
    </>
  );
}
