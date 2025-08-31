import Footer from "@/components/Footer";
import OpacityPrice from "./components/OpacityPrice";
import Header from "@/components/Header";
import Request from "../components/Requests";
import ServiceSection from "./components/Services";


export default function Services() {
  return (
    <>
      <Header title={"Услуги"} />

      <main style={{ background: "black" }}>
        <ServiceSection />
        <OpacityPrice />
        <Request />
      </main>
      <Footer />
    </>
  );
}
