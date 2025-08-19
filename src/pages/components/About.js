import style from "./About.module.css";

export default function About() {
  return (
    <section className={style.aboutSection}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.titleBlock}>
            <h2 className={style.mainTitle}>Мы</h2>
          </div>
          <div className={style.subtitleBlock}>
            <h2 className={style.subtitle}>
              Молодая веб-студия из
              <span className={style.accentText}> Хакасии</span>
            </h2>
          </div>
          <div className={style.textBlock}>
            <p className={style.description}>
              Поскольку мы недавно вышли на рынок, у нас действует уникальное
              предложение –{" "}
              <span className={style.accentText}>сниженные цены</span> на весь
              спектр услуг! Сейчас у вас есть отличная возможность заказать
              разработку сайтов, веб-приложений и цифровых решений с максимально
              выгодными условиями.
            </p>
          </div>
        </div>
      </div>
      <div></div>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <article className={style.card}>
            <h3 className={style.cardTitleOrders}>Выполненных заказов</h3>
            <p className={style.cardNumber}>50+</p>
          </article>
          <article className={style.card}>
            <h3 className={style.cardTitleRegion}>В Хакасии</h3>
            <p className={style.cardNumber}>#1</p>
          </article>
          <article className={style.card}>
            <h3 className={style.cardTitleClients}>Постоянных клиентов</h3>
            <p className={style.cardNumber}>20+</p>
          </article>
        </div>
      </div>
    </section>
  );
}
