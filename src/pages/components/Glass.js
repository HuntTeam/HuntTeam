"use client";
import { useEffect, useRef, useState } from "react";
import style from "./Uslugi.module.css";

export default function GlassCursor() {
  const cursorRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const container = cursor.parentElement;
    if (!container) return;

    const moveCursor = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const cursorWidth = isActive ? 15 : 150;
      const cursorHeight = isActive ? 15 : 150;

      let posX = x - cursorWidth / 2;
      let posY = y - cursorHeight / 2;

      posX = Math.max(0, Math.min(posX, rect.width - cursorWidth));
      posY = Math.max(0, Math.min(posY, rect.height - cursorHeight));

      cursor.style.transform = `translate(${posX}px, ${posY}px)`;

      // Обнаружение элементов под курсором с увеличение
      const elements = document.elementsFromPoint(e.clientX, e.clientY);
      const zoomableElement = elements.find(
        (el) =>
          el.hasAttribute("data-zoomable") || el.closest("[data-zoomable]")
      );

      // Убираем увеличение с предыдущего элемента
      if (hoveredElement && hoveredElement !== zoomableElement) {
        hoveredElement.style.transform = "scale(1)";
        hoveredElement.style.transition = "transform 0.3s ease";
        hoveredElement.style.zIndex = "";
      }

      // Применяем увеличение к новому элементу
      if (zoomableElement && zoomableElement !== hoveredElement) {
        zoomableElement.style.transform = "scale(1.1)";
        zoomableElement.style.transition = "transform 0.3s ease";
        zoomableElement.style.zIndex = "2";
        setHoveredElement(zoomableElement);
      } else if (!zoomableElement && hoveredElement) {
        setHoveredElement(null);
      }
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    container.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Скрываем стандартный курсор
    document.body.style.cursor = "none";

    return () => {
      container.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";

      // Сброс масштаба при размонтировании
      if (hoveredElement) {
        hoveredElement.style.transform = "scale(1)";
      }
    };
  }, [isActive, hoveredElement]);

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
