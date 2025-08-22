"use client";
import { useEffect, useState } from "react";
import style from "./Footer.module.css";

export default function Change() {
  const [active, setActive] = useState(0);
  let array = [
    "*%#@!&=0",
    "?$^+~|1",
    "#<>/-\\2",
    "@{}[]`3",
    "42",
    "!()*;'4",
    ':,"._%5',
    "§±©®™6",
    "hello world",
    "✓∞÷×7",
    "♠♥♦♣8",
    "↑↓←→9",
    "undefined",
    "null",
    "NaN",
    "[object Object]",
    "💻 developer secret",
    "π = 3.14159",
    "0xDEADBEEF",
    "¯\\_(ツ)_/¯",
    "не нажимай сюда",
    "ты нашел пасхалку! 🥚",
    "sudo make me a sandwich",
    "битовая маска 0x0F0F0F0F",
    "Base64: SGVsbG8=",
    "404 not found",
    "require('magic')",
    "🤫 секретный уровень",
    "Ctrl+Alt+Delete",
    "01001000 01101001",
    "Ответ: 42",
  ];
  useEffect(() => {
    let timer = setInterval(() => {
      setActive((prevActive) =>
        prevActive + 1 === array.length ? 0 : prevActive + 1
      );
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, [array.length]);

  return (
    <span className={style.location}>
      Хакасия — Абакан —<span className={style.address}> {array[active]}</span>
    </span>
  );
}
