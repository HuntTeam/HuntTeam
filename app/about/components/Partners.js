import Images from "app/Elements/Image";
import style from "./Partners.module.css";

export default function Partners() {
  const partners = [
    {
      name: "Маркетинговые агентства",
      description:
        "Дополнительный доход для ваших клиентов без увеличения бюджета.",
    },
    {
      name: "Студии дизайна",
      description:
        "Если у вас нет ресурсов на разработку, а клиент просит «сделать сайт».",
    },
    {
      name: "Фрилансеры",
      description: "Монетизируйте свои контакты и рекомендации.",
    },
    {
      name: "IT-команды и веб-студии",
      description:
        "Для непрофильных заказов (например, дизайн рекламной продукции).",
    },
    {
      name: "Для Васи Пупкина",
      description:
        "Если просто много знакомых, можете им платить 5% с заказа и 5% забирать себе.",
    },
    {
      name: "Бизнес-консультанты и коучи",
      description:
        "Поможете клиентам с digital-реализацией и получите процент.",
    },
  ];

  return (
    <section className={style.partners}>
      <div className={style.header}>
        <div className={style.partnersHeader}>
          <h2 className={style.partnersTitle}>Партнёрская программа</h2>
          <p className={`${style.partnersDescription} ${style.mt30}`}>
            Помимо разработки сайтов, наша веб-студия из Абакана создает
            эффективные рекламные материалы: разрабатываем запоминающиеся
            логотипы, дизайн визиток, брошюр, листовок, а также баннеры для
            онлайн- и офлайн-продвижения. Мы делаем комплексный дизайн — от
            полиграфии до digital-баннеров, чтобы ваш бренд выделялся в Хакасии
            и за ее пределами
          </p>
        </div>
        <div className={style.partnersHeader}></div>
        <article className={`${style.partnersArticle} ${style.right}`}>
          <h3 className={style.partnersDescription}>
            Для кого подходит программа
          </h3>
          <ul className={style.partnersList}>
            {partners.map((p, index) => (
              <li key={index} className={style.partnersItem}>
                <h3 className={style.partnersItemTitle}>{p.name}</h3>
                <p className={style.partnersItemDescription}>{p.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
      <div className={style.steps} aria-labelledby="steps-title">
        <div className={style.stepsContent}>
          <h4 id="steps-title" className={style.stepsTitle}>
            Как она работает?
          </h4>

          <ol className={style.stepsList}>
            <li className={style.stepsItem}>
              <h5 className={style.stepsItemTitle}>1 Шаг</h5>
              <p className={style.stepsItemDescription}>
                Вы приводите клиента, который заказывает разработку, дизайн или
                маркетинговые услуги.
              </p>
            </li>
            <li className={style.stepsItem}>
              <h5 className={style.stepsItemTitle}>2 Шаг</h5>
              <p className={style.stepsItemDescription}>
                После подписания акта приёмки и оплаты заказа (например, на 100
                000 ₽) вы получаете 10%.
              </p>
            </li>
          </ol>
        </div>
        <div></div>
        <aside className={style.stepsBonus} aria-label="Вознаграждение">
          <Images
            src={"/steps-bonus-bg.svg"}
            alt={"Фон"}
            classname={style.svg}
            height={937}
            width={516}
          />
          <p className={style.stepsBonusPercent}>10%</p>
        </aside>
      </div>
    </section>
  );
}
