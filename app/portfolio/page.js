import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Request from "@/components/Requests";
import Landing from "./components/Landing";
import Works from "./components/Works";

export default function Cases() {
  return (
    <>
      <Header title={"Проекты"} />

      <main style={{ background: "black" }}>
        <Landing />
        <Works />
        <Request />
      </main>
      <Footer />
    </>
  );
}
