"use client";

import style from "./Media.module.css";
import Images from "app/Elements/Image";
import { useEffect, useRef, useState } from "react";
export default function Media() {
  const ref = useRef(null);
  const [isActive, setActive] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Элемент видим!");
            setActive(true);
          } else {
            setActive(false);
            console.log("Элемент скрыт.");
          }
        });
      },
      { rootMargin: "100px" }
    );
    observer.observe(ref.current);
  }, []);
  return (
    <section className={style.section} aria-labelledby="follow-us-heading">
      <div className={style.container}>
        {/* Заголовок блока */}
        <header className={style.textBlock}>
          <h2 id="follow-us-heading" className={style.title}>
            Следить за нами
          </h2>
          <p className={style.description}>
            Если интересна наша цифровая жизнь, следите и подписывайтесь на
            ТикТок и Телеграм
          </p>
        </header>

        <div className={style.qrWrapper}>
          <article
            className={`${style.qrBlock} ${isActive ? style.active : ""}  ${
              style.books
            }`}
          >
            <h3 className={style.qrTitle}>ТикТок</h3>
            <Images
              alt="QR-код для подписки на официальный TikTok HuntTeam"
              classname={style.img}
              src={"/qrTT.png"}
              height={597}
              width={467}
            />
          </article>

          <article
            className={`${style.qrBlock} ${isActive ? style.active : ""}`}
          >
            <h3 className={style.qrTitle}>Телеграм</h3>
            <Images
              alt="QR-код для подписки на официальный Telegram HuntTeam"
              classname={style.img}
              src={"/qrTG.png"}
              height={597}
              width={467}
            />
          </article>
        </div>
      </div>

      <div className={style.tracker} ref={ref} aria-hidden="true" />
    </section>
  );
}
