"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./Header.module.css";

export default function Header({ title }) {
  const [isActive, setIsActive] = useState(false);
  const [cursorY, setCursorY] = useState(0);
  const [isCursorOver, setIsCursorOver] = useState(false);

  const toggleActive = () => {
    setIsActive((prev) => !prev);
    // document.body.style.overflowY = isActive ? "auto" : "hidden";
  };

  // Отслеживание позиции курсора
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorY(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <header className={`${style.header} ${isActive ? style.active : ""}`}>
      <nav className={style.nav} aria-label="Основная навигация">
        <Link href="/" className={`${style.logoLink} ${isActive ? "mob" : ""}`}>
          <Image
            alt="Логотип веб-студии HuntTeam"
            src="/logoheader.svg"
            width={49}
            height={26}
            priority
            className={style.logo}
          />
        </Link>
        {!isActive && title && (
          <p className={style.titlePage} onClick={toggleActive}>
            {title}
          </p>
        )}
        {!isActive && (
          <button className={style.menu} onClick={toggleActive}>
            Меню
          </button>
        )}
        <ul
          className={`${style.navList} ${isActive ? style.activeNav : ""}`}
          style={{ "--cursor-y": `${cursorY}px` }}
          onMouseEnter={() => setIsCursorOver(true)}
          onMouseLeave={() => setIsCursorOver(false)}
        >
          <li className={style.navItem}>
            <Link
              href="/about"
              className={`${style.navLink} ${style.linkAbout}`}
            >
              О студии
            </Link>
          </li>
          <li className={style.navItem}>
            <Link
              href="/cases"
              className={`${style.navLink} ${style.linkCases}`}
            >
              Кейсы
            </Link>
          </li>
          <li className={style.navItem}>
            <Link
              href="/services"
              className={`${style.navLink} ${style.linkServices}`}
            >
              Услуги
            </Link>
          </li>
          <li className={style.navItem}>
            <Link
              href="/contact"
              className={`${style.navLink} ${style.linkContact}`}
            >
              Оставить заявку
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
