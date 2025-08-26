"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function Images({ src, classname, alt, width, height }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "100px",
        threshold: 0.01,
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={classname}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isVisible && (
        <Image
          src={src}
          height={height}
          width={width}
          style={{ width: "100%", height: "auto" }}
          loading="lazy"
          alt={alt}
        />
      )}
    </div>
  );
}
