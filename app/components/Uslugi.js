import Images from "../Elements/Image";
import GlassCursor from "./Glass";
import style from "./Uslugi.module.css";

export default function Uslugi() {
  return (
    <section className={`${style.section} ${style.zoomable}`}>
      {/* <GlassCursor /> */}
      <div className={style.header}>
        <h2 className={style.title}>Услуги</h2>
      </div>
      <div className={style.flex}>
        <div className={style.padding}>
          <article className={style.card}>
            <h3 className={style.cardTitle}>
              <a href="/#">Разработка и запуск сайта любой сложности</a>
            </h3>
            <Images
              alt={"Разработка дизайна"}
              classname={style.img}
              height={316}
              width={344}
              src={"/dino.png"}
            />
            <p className={style.cardText}>
              Мы создаем сайты с акцентом на креативный дизайн и эффективное
              SEO, чтобы ваш бизнес выделялся и привлекал клиентов из поисковых
              систем. Наша команда разрабатывает уникальный визуал с
              использованием 3D, обеспечивая запоминающийся стиль, адаптивный
              для всех устройств. Мы проводим анализ ниши, подбираем ключевые
              слова, оптимизируем код, мета-теги, alt-атрибуты, robots.txt и
              sitemap.xml, подключаем Google Analytics и Яндекс.Метрику.
              Результат — стильный, быстрый сайт с ярким дизайном, готовый к
              продвижению и высоким позициям в Google и Яндекс.
            </p>
          </article>

          <article className={style.card}>
            <h3 className={style.cardTitle}>
              <a href="/#">Создание Телеграмм ботов</a>
            </h3>

            <Images
              alt={"Разработка телеграм ботов"}
              classname={style.img}
              height={316}
              width={344}
              src={"/telegram.png"}
            />
            <p className={style.cardText}>
              Мы создаем сайты с акцентом на креативный дизайн и эффективное
              SEO, чтобы ваш бизнес выделялся и привлекал клиентов из поисковых
              систем. Наша команда разрабатывает уникальный визуал с
              использованием 3D, обеспечивая запоминающийся стиль, адаптивный
              для всех устройств. Мы проводим анализ ниши, подбираем ключевые
              слова, оптимизируем код, мета-теги, alt-атрибуты, robots.txt и
              sitemap.xml, подключаем Google Analytics и Яндекс.Метрику.
              Результат — стильный, быстрый сайт с ярким дизайном, готовый к
              продвижению и высоким позициям в Google и Яндекс.
            </p>
          </article>
        </div>
        <div className={style.padding}>
          <article className={style.card}>
            <h3 className={style.cardTitle}>
              <a href="/#">Дизайн рекламных материалов</a>
            </h3>

            <Images
              alt={"Разработка дизайна"}
              classname={style.img}
              height={316}
              width={344}
              src={"/megafone.png"}
            />
            <p className={style.cardText}>
              Мы создаем запоминающиеся рекламные креативы, с четким дизайном,
              учитывая анализ аудитории и конкурентов для повышения узнаваемости
              бренда. Разрабатываем уникальные концепции, подбираем стиль и
              оптимизируем материалы для печати или цифровых платформ
            </p>
          </article>
          <article className={style.card}>
            <h3 className={style.cardTitle}>
              <a href="/#">Разработка CMS</a>
            </h3>

            <Images
              alt={"Разработка CMS"}
              classname={style.img}
              height={316}
              width={344}
              src={"/cms.png"}
            />
            <p className={style.cardText}>
              Мы создаем сайты с акцентом на креативный дизайн и эффективное
              SEO, чтобы ваш бизнес выделялся и привлекал клиентов из поисковых
              систем. Наша команда разрабатывает уникальный визуал с
              использованием 3D, обеспечивая запоминающийся стиль, адаптивный
              для всех устройств. Мы проводим анализ ниши, подбираем ключевые
              слова, оптимизируем код, мета-теги, alt-атрибуты, robots.txt и
              sitemap.xml, подключаем Google Analytics и Яндекс.Метрику.
              Результат — стильный, быстрый сайт с ярким дизайном, готовый к
              продвижению и высоким позициям в Google и Яндекс.
            </p>
          </article>

          <article  className={style.card}>
            <h3 className={style.cardTitle}>
              <a href="/#">Разработка логотипа</a>
            </h3>

            <Images
              alt={"Разработка логотипов"}
              classname={`${style.img} ${style.wfull}`}
              height={486}
              width={286}
              src={"/logo.png"}
            />
            <p className={style.cardText}>
              Мы создаем сайты с акцентом на креативный дизайн и эффективное
              SEO, чтобы ваш бизнес выделялся и привлекал клиентов из поисковых
              систем. Наша команда разрабатывает уникальный визуал с
              использованием 3D, обеспечивая запоминающийся стиль, адаптивный
              для всех устройств. Мы проводим анализ ниши, подбираем ключевые
              слова, оптимизируем код, мета-теги, alt-атрибуты, robots.txt и
              sitemap.xml, подключаем Google Analytics и Яндекс.Метрику.
              Результат — стильный, быстрый сайт с ярким дизайном, готовый к
              продвижению и высоким позициям в Google и Яндекс.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
