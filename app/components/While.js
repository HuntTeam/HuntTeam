"use client";

import { useEffect, useRef, useState } from "react";
import Images from "../Elements/Image";
import style from "./While.module.css";
const lockScroll = () => {
  document.body.style.overflowY = "hidden";
};

const unlockScroll = () => {
  document.body.style.overflowY = "";
};

export default function While() {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);

  const list = [
    {
      title: (
        <>
          качественный
          <br />
          брифинг
        </>
      ),
      description: "Перенесем ваши мысли в качественное ТЗ",
    },
    {
      title: (
        <>
          Дизайн с <br />
          характером
        </>
      ),
      description: "создадим стиль, который запомнится",
    },
    {
      title: (
        <>
          Чистый код и <br />
          адаптив
        </>
      ),
      description: "ваш сайт будет быстрым на любом устройстве",
    },
    {
      title: (
        <>
          Запуск и<br />
          настройка
        </>
      ),
      description: "поможем с доменом, хостингом и базовым SEO",
    },
    {
      title: (
        <>
          ПОСТ
          <br />
          Поддержка
        </>
      ),
      description: "Будем поддерживать ваш сайт после публикации",
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            lockScroll();
          }
        });
      },
      {
        root: null,
        threshold: 1,
      }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);
  const handleWheel = (e) => {
    e.preventDefault();

    if (e.deltaY > 0) {
      if (active < list.length - 1) {
        setActive((prev) => prev + 0.2);
      } else {
        unlockScroll();
      }
    } else if (e.deltaY <= 0) {
      if (active > 0) {
        setActive((prev) => prev - 1);
      } else {
        unlockScroll();
      }
    }
  };
  return (
    <section
      className={style.whileSection}
      onWheel={handleWheel}
      ref={containerRef}
    >
      <div className={style.container}>
        <div className={style.header}>
          <h2 className={style.title}>
            <span className={style.titleLine}>
              Полный цикл
              <br />
            </span>
            <span
              className={style.titleSubtitle}
              onClick={() => lockScroll()()}
            >
              — от ТЗ до поддержки
            </span>
          </h2>
        </div>

        <div className={style.imageWrapper}>
          <Images
            alt="Megafone"
            classname={style.imgItem}
            height={522}
            width={583}
            src="/megafone.svg"
          />
          <div className={style.emptyDiv}>
            <span>{Math.max(1, Math.round(active) + 1)}</span>
            <span>|</span>
            <span>{list.length}</span>
          </div>
        </div>

        {list.map((item, index) => (
          <div
            key={index}
            data-index={index}
            className={`${style.step} ${
              Math.round(active) === index ? "" : style.none
            }`}
          >
            <div className={style.iconWrapper}>
              <Images
                alt="фц"
                classname={style.icon}
                height={35}
                width={35}
                src={`/miniicons/${index + 1}.svg`}
              />
            </div>
            <div className={style.textWrapper}>
              <h3 className={style.stepTitle}>{item.title}</h3>
              <p className={style.stepText}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
