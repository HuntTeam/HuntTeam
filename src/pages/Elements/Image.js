"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function Images({ src, classname, alt }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            console.log("Элемент в экране ✅");
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
    <div ref={ref} className={classname}>
      {isVisible && <Image src={src} width={100} height={100} alt={alt} />}
    </div>
  );
}
