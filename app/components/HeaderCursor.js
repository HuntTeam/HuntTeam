"use client";
import { useEffect, useRef, useState } from "react";
import style from "./Header.module.css";

export default function HeaderCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const handleMove = (e) => {
      const container = ref.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setPos({ x, y });

      // Определяем четверть
      const isLeft = e.clientX < centerX;
      const isTop = e.clientY < centerY;

      if (isTop && isLeft) setRotation(165); 
      else if (isTop && !isLeft) setRotation(-105); 
      else if (!isTop && isLeft) setRotation(75); 
      else setRotation(-15); // низ-право
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [rotation]);

  return (
    <div className={style.container} ref={ref}>
      <div
        className={style.cursorOnNav}
        style={{
          transform: `translate(${pos.x - 40}px, ${
            pos.y - 40
          }px) rotate(${rotation}deg)`,
        }}
      />
    </div>
  );
}
