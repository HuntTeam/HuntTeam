import BG from "./BGMove";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <article className={styles.hero}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наша цель</h2>
        <div className={styles.subtitleWrapper}>
          <h3 className={styles.subtitle}>
            <span className={styles.highlight}>Повысить</span>{" "}
            <span>уровень качества и эстетики сайтов для бизнеса Хакасии</span>
          </h3>
        </div>
        <BG />
      </div>
    </article>
  );
}
