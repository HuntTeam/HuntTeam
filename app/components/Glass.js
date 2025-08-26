"use client";
import { useEffect, useRef, useState } from "react";
import style from "./Uslugi.module.css";

export default function GlassCursor() {
  const cursorRef = useRef(null);
  const [isActive,setActive] = useState(0)
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const container = cursor.parentElement;
    if (!container) return;

    const moveCursor = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const cursorWidth = 150;
      const cursorHeight = 150;

      let posX = x - cursorWidth / 2;
      let posY = y - cursorHeight / 2;

      posX = Math.max(0, Math.min(posX, rect.width - cursorWidth));
      posY = Math.max(0, Math.min(posY, rect.height - cursorHeight));

      cursor.style.transform = `translate(${posX}px, ${posY}px)`;
    };

    container.addEventListener("mousemove", moveCursor);
    document.body.style.cursor = "none";

    return () => {
      container.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <div className={style.contaiverCursor}>
      <div
        ref={cursorRef}
        className={`${style.cursor} ${isActive ? style.cursorActive : ""}`}
      >
        <div className={style.cursorText}>Посмотреть че по чем</div>
      </div>
    </div>
  );
}
