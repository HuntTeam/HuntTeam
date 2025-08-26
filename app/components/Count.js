"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Works.module.css";

const CounterTitle = () => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let current = 0;

    const animateCount = () => {
      if (current >= 50) return;

      current += 2;
      setCount(current);

      let delay = 50;
      if (current >= 45) {
        const progress = (current - 45) / 5;
        delay = 40 + Math.pow(progress, 2) * 200;
      }

      setTimeout(animateCount, delay);
    };

    animateCount();
  }, [hasStarted]);

  return (
    <span className={styles.count} ref={counterRef}>
      <span key={count} className={styles.fallingNumber}>
        {count}
      </span>
    </span>
  );
};

export default CounterTitle;
