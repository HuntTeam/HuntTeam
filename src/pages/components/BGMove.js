import { useEffect, useRef, useState } from "react";
import Image from "@/pages/Elements/Image";
import style from "./Hero.module.css";

export default function BG() {
  const [isCentered, setIsCentered] = useState(false);
  const bgRef = useRef(null);

  useEffect(() => {
    if (!bgRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCentered(entry.isIntersecting);
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -45% 0px", // Более надежный формат
      }
    );

    if (bgRef.current) {
      observer.observe(bgRef.current);
    }

    return () => {
      if (bgRef.current) {
        observer.unobserve(bgRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={bgRef}
      className={`${style.bg} ${isCentered ? style.rotate : ""}`}
    >
      <Image
        classname={style.w100}
        alt={"Республика Хакассия"}
        height={814}
        src={"/fone.png"}
        width={1893}
        key={"Fon"}
      />
      <Image
        classname={style.logo}
        alt={"Логотип HuntTeam"}
        height={512}
        src={"/shadow.png"}
        width={667}
        key={"Fon"}
      />
    </div>
  );
}
