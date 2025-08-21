"use client";
import { useEffect, useRef, useState } from "react";
import style from "./Uslugi.module.css";

export default function GlassCursor() {
  const cursorRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const container = cursor.parentElement;
    if (!container) return;

    const moveCursor = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const cursorWidth = isActive ? 20 : 150; 
      const cursorHeight = isActive ? 20 : 150;

      let posX = x - cursorWidth / 2;
      let posY = y - cursorHeight / 2;

      posX = Math.max(0, Math.min(posX, rect.width - cursorWidth));
      posY = Math.max(0, Math.min(posY, rect.height - cursorHeight));

      cursor.style.transform = `translate(${posX}px, ${posY}px)`;
    };
   
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    container.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isActive]); 

  return (
    <div className={style.contaiverCursor}>
      <div
        ref={cursorRef}
        className={`${style.cursor} ${isActive ? style.cursorActive : ""}`}
      >
        {!isActive && (
          <div className={style.cursorText}>Посмотреть че по чем</div>
        )}
      </div>
    </div>
  );
}
