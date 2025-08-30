"use client";
import { useRef, useState, useMemo } from "react";
import Images from "app/Elements/Image";
import style from "./Developers.module.css";

/**
 * mirror — укажите true, если фото разработчика визуально зеркалится (например, через CSS transform: scaleX(-1)).
 * Для простого "переворота колонок" через row-reverse mirror не нужен.
 */
export default function PicFound({ dev, isRevers, mirror = false }) {
  const imageRef = useRef(null); // контейнер с фото
  const [st, setSt] = useState({ x: 0, y: 0, show: false });

  const magnifierSize = 120; // диаметр лупы, px
  const zoom = 2; // коэффициент увеличения в лупе

  const onMove = (e) => {
    const el = imageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    // если фото зеркалится — инвертируем X
    if (mirror) x = rect.width - x;

    // ограничим в пределах (для аккуратности на краях)
    x = Math.max(0, Math.min(rect.width, x));
    y = Math.max(0, Math.min(rect.height, y));

    setSt({ x, y, show: true });
  };

  const onLeave = () => setSt((p) => ({ ...p, show: false }));

  // параметры фона лупы, привязанные к реальному рендеру изображения
  const bg = useMemo(() => {
    const el = imageRef.current;
    if (!el) return null;

    const rect = el.getBoundingClientRect();
    const bgW = rect.width * zoom;
    const bgH = rect.height * zoom;

    const posX = -(st.x * zoom - magnifierSize / 2);
    const posY = -(st.y * zoom - magnifierSize / 2);

    return {
      size: `${bgW}px ${bgH}px`,
      pos: `${posX}px ${posY}px`,
      left: st.x - magnifierSize / 2,
      top: st.y - magnifierSize / 2,
    };
  }, [st, zoom, magnifierSize]);

  return (
    <div className={`${style.w50} ${isRevers ? style.reversed : ""}`}>
      <div
        className={style.founderImage}
        ref={imageRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <Images
          alt="#"
          classname={style.reverse}
          height={449}
          width={226}
          src={`/${dev}.png`}
        />

        {/* верхний чёрный слой с обезьяной */}
        <div className={style.monkey} />

        {/* лупа — поверх monkey */}
        {st.show && bg && (
          <div
            className={style.magnifier}
            style={{
              left: `${bg.left}px`,
              top: `${bg.top}px`,
              backgroundImage: `url(/${dev}.png)`,
              backgroundSize: bg.size,
              backgroundPosition: bg.pos,
            }}
          />
        )}
      </div>

      <div className={style.founderLogo}>
        <Images
          alt="#"
          classname={`${style.reverse} ${style.end}`}
          height={449}
          width={226}
          src={"/cutlogo.svg"}
        />
      </div>
    </div>
  );
}
