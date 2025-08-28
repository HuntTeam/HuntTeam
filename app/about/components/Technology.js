import style from "./Technology.module.css";

export default function Technology() {
  return (
    <section className={style.section}>
      <div style={{ position: "relative" }}>
        <div className={style.header}>
          <div className={style.content}>
            <h2 className={style.title}>Технологии</h2>
            <p className={style.description}>
              Наша команда профессионалов владеет всеми необходимыми
            
              инструментами для эффективной реализации проектов любой
              сложности.
            </p>
          </div>
        </div>

        <div className={style.container}>
          <article className={style.block}>
            <h3>Для создания первоклассного визуала</h3>
            <ul className={style.list}>
              {[
                "Figma",
                "Photoshop",
                "Illustrator",
                "Spline",
                "After Effects",
                "InDesign",
                "CorelDRAW",
                "Canva",
              ].map((item, index) => (
                <li key={index} className={style.item}>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className={`${style.block} ${style.twoBlock}`}>
            <h3>Для программной части</h3>
            <ul className={style.list}>
              {[
                "JavaScript",
                "TypeScript",
                "HTML5",
                "CSS3",
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "REST API",
                "WebSockets",
                "Git",
                "Docker",
                "CI/CD",
                "Jest",
                "Адаптивная верстка",
              ].map((item, index) => (
                <li key={index} className={style.item}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
