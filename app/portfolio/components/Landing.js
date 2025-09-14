"use client";

import { useEffect, useState } from "react";
import style from "./Landing.module.css";
import ScrollElem from "./ScrollElem";

export default function Landing() {
  const hello_text = "Зацените наши трусослетательные работы";
  const black_magic_endings = [
    "  — запрещенк",
    "  — запрещено в 47 странах",
    "  — одобрено психиатрами",
    "  — эффект: разрыв аорты",
    "  — эффект необратим",
    "  — запрещено ООН",
  ];

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const ending =
      black_magic_endings[
        Math.floor(Math.random() * black_magic_endings.length)
      ];
    let interval = setInterval(() => {
      setDisplayedText((prev) => prev + hello_text[index]);
      index++;
      if (index >= hello_text.length - 1) {
        clearInterval(interval);

        let blackIndex = 0;
        interval = setInterval(() => {
          setDisplayedText((prev) => prev + ending[blackIndex]);
          blackIndex++;
          if (blackIndex >= ending.length - 1) {
            clearInterval(interval);

            interval = setInterval(() => {
              setDisplayedText((prev) => prev.slice(0, prev.length - 1));
              blackIndex--;
              if (blackIndex <= 0) {
                clearInterval(interval);
              }
            }, 70);
          }
        }, 50);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={style.section}>
      <ScrollElem />
      <h2 className={style.title}>
        {displayedText}
        <span className={style.line}>|</span>
      </h2>
    </section>
  );
}
