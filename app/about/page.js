import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Request from "../components/Requests";
import Landing from "./components/Landing";
import Technology from "./components/Technology";
import Founders from "./components/Developers";
import Contacts from "./components/Contacts";
import Partners from "./components/Partners";
import Plane from "./components/Plane";
import Mission from "./components/Mission";
import Media from "./components/Media";

export default function Services() {
  return (
    <>
      <Header title={"О студии"} />

      <main style={{ background: "black" }}>
        <Landing />
        <Plane />
        <Technology />
        <Founders />
        <Mission />
        <Partners />
        <Contacts />
        <Request />
        <Media />
      </main>
      <Footer />
    </>
  );
}
