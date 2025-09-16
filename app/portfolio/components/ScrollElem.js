"use client";
import { useEffect, useRef, useState } from "react";
import style from "./Landing.module.css";
import Image from "next/image";

export default function ScrollElem() {
  const containerRef = useRef(null);

  const container1Ref = useRef(null);
  const container2Ref = useRef(null);
  const container3Ref = useRef(null);

  const [way, setWay] = useState("top");

  useEffect(() => {
    const handleScroll = (e) => {
      if (!containerRef.current) return;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScroll);
      }
    };
  }, [way]);
  useEffect(() => {
    const sections = document.querySelectorAll(`.${style.sectionBlock}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === container2Ref.current) {
              console.log("Horizontal");
              // alert("Horizontal");
            } else {
              console.log("Vertical");
              // alert("Vertical");
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '400px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className={style.scrollContainer} ref={containerRef}>
      <div className={style.relative}>
        {/* Первый вертикальный блок */}
        <div className={`${style.sectionBlock} ${style.verticalContainer}`}>
          {Array.from({ length: 4 }).map((_, index) => (
            <Image
              key={index}
              alt="Картинка"
              className={style.img}
              width={553}
              height={629}
              src={`/scroll/one/${index + 1}.webp`}
            />
          ))}
        </div>

        <div
          className={`${style.sectionBlock} ${style.horizontalContainer}`}
          ref={container2Ref}
          style={{ backgroundColor: "red" }}
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <Image
              key={index}
              alt="Картинка"
              className={style.imgH}
              width={795}
              height={472}
              src={`/scroll/two/${index + 1}.png`}
            />
          ))}
        </div>

        <div
          className={`${style.sectionBlock} ${style.verticalContainer} ${style.last}`}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <Image
              key={index}
              alt="Картинка"
              className={style.img}
              width={200}
              height={200}
              src={`/scroll/three/${index + 1}.png`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
