import Images from "app/Elements/Image";
import style from "./OpacityPrice.module.css";

export default function OpacityPrice() {
  return (
    <section
      className={style.section}
      aria-labelledby="opacity-price-title"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className={style.container}>
        <h2 id="opacity-price-title" className={style.title}>
          Прозрачные цены и сроки для вашего проекта
        </h2>

        <Images
          alt="Прозрачные цены и сроки разработки сайтов — визуальная иллюстрация"
          classname={style.img}
          height={449}
          width={480}
          src="/megafone.png"
          itemProp="image"
        />

        <p className={style.text} itemProp="description">
          На этой странице представлены ориентировочные цены на разработку
          сайтов, чтобы вы могли заранее спланировать бюджет. Точные сроки и
          стоимость проекта определяются после брифа, так как зависят от объёма
          работ, выбранных технологий и количества часов разработки. Мы
          обеспечиваем полную прозрачность: предоставляем детальный отчёт о
          затраченных ресурсах и времени, чтобы вы всегда знали, за что платите.
        </p>

        <meta itemProp="serviceType" content="Разработка сайтов" />
        <meta itemProp="provider" content="Huntteam.ru" />
      </div>
    </section>
  );
}
