import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Request from "../components/Requests";
import Landing from "./components/Landing";
import Technology from "./components/Technology";
import Founders from "./components/Developers";

export default function Services() {
  return (
    <>
      <Header title={"О студии"} />

      <main style={{ background: "black" }}>
        <Landing />
        <Technology />
        <Founders />
        <Request />
      </main>
      <Footer />
    </>
  );
}
