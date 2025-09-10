import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Request from "@/components/Requests";

export default function Services() {
  return (
    <>
      <Header title={"Проекты"} />

      <main style={{ background: "black" }}>
      <Request />
      </main>
      <Footer />
    </>
  );
}
