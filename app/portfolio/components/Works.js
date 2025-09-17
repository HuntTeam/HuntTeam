import Link from "next/link";
import style from "./Works.module.css";
import Images from "app/Elements/Image";

export default function Works() {
  const active = 0;
  const cases = [
    {
      title: "Терминал выдачи талонов",
      do: [
        {
          title: "Анализ ЦА",
          text: "На период работы в банке, выявлял кто больше испытывает трудностей с обращением терминалом",
        },
        {
          title: "Выявление проблем",
          text: "Работаю с клиентами в банке 3 недели, подмечаю проблемы",
        },
        {
          title: "Поиск решения",
          text: "После работы в банке по выявлению проблем, копил возможные решения проблем, выбирая наилучшие",
        },
        {
          title: "Реализация решений",
          text: "Прототипы, стиль, userflow и т.п.",
        },
        {
          title: "Реализация веб-терминала",
          text: "Программирование на React, TypeScript, MobX",
        },
      ],
      blocks: ["UX", "UI", "3D", "Финансы", "Веб-приложение"],
      picture: "#",
      titleCompany: "ПАО Росбанк",
      icon: "",
      descriptionCompany:
        "Крупный российский банк, входящий в группу Societe Generale и предлагающий комплексные финансовые услуги для частных и корпоративных клиентов.",
      socialMedia: [
        { type: "dprofile.svg", link: "" },
        { type: "github.svg", link: "" },
        { type: "behance.svg", link: "" },
      ],
    },
    {
      title: "Терминал выдачи талонов",
      do: [
        {
          title: "Анализ ЦА",
          text: "На период работы в банке, выявлял кто больше испытывает трудностей с обращением терминалом",
        },
        {
          title: "Выявление проблем",
          text: "Работаю с клиентами в банке 3 недели, подмечаю проблемы",
        },
        {
          title: "Поиск решения",
          text: "После работы в банке по выявлению проблем, копил возможные решения проблем, выбирая наилучшие",
        },
        {
          title: "Реализация решений",
          text: "Прототипы, стиль, userflow и т.п.",
        },
        {
          title: "Реализация веб-терминала",
          text: "Программирование на React, TypeScript, MobX",
        },
      ],
      blocks: ["UX", "UI", "3D", "Финансы", "Веб-приложение"],
      picture: "#",
      titleCompany: "ПАО Росбанк",
      icon: "",
      descriptionCompany:
        "Крупный российский банк, входящий в группу Societe Generale и предлагающий комплексные финансовые услуги для частных и корпоративных клиентов.",
      socialMedia: [
        { type: "dprofile.svg", link: "" },
        { type: "github.svg", link: "" },
        { type: "behance.svg", link: "" },
      ],
    },
    {
      title: "Терминал выдачи талонов",
      do: [
        {
          title: "Анализ ЦА",
          text: "На период работы в банке, выявлял кто больше испытывает трудностей с обращением терминалом",
        },
        {
          title: "Выявление проблем",
          text: "Работаю с клиентами в банке 3 недели, подмечаю проблемы",
        },
        {
          title: "Поиск решения",
          text: "После работы в банке по выявлению проблем, копил возможные решения проблем, выбирая наилучшие",
        },
        {
          title: "Реализация решений",
          text: "Прототипы, стиль, userflow и т.п.",
        },
        {
          title: "Реализация веб-терминала",
          text: "Программирование на React, TypeScript, MobX",
        },
      ],
      blocks: ["UX", "UI", "3D", "Финансы", "Веб-приложение"],
      picture: "#",
      titleCompany: "ПАО Росбанк",
      icon: "",
      descriptionCompany:
        "Крупный российский банк, входящий в группу Societe Generale и предлагающий комплексные финансовые услуги для частных и корпоративных клиентов.",
      socialMedia: [
        { type: "dprofile.svg", link: "" },
        { type: "github.svg", link: "" },
        { type: "behance.svg", link: "" },
      ],
    },
  ];

  return (
    <section className={style.section} aria-labelledby="projects-title">
      {cases.map((item, index) => (
        <article
          className={style.article}
          key={index}
          itemScope
          style={{ display: index === active ? "flex" : "none" }}
          itemType="https://schema.org/CreativeWork"
        >
          <div className={style.blockDetails}>
            <header className={style.header}>
              <h2 className={style.projectTitle} itemProp="name">
                {item.title}
              </h2>
            </header>

            <article
              className={style.doneSection}
              aria-labelledby={`done-${index}`}
            >
              <h3 className={style.subtitle} id={`done-${index}`}>
                Что было сделано:
              </h3>
              <ul className={style.doneList}>
                {item.do.map((wo, i) => (
                  <li className={style.doneItem} key={i} itemProp="step">
                    <p className={style.doneTitle}>{wo.title}</p>
                    <p className={style.doneText}>{wo.text}</p>
                  </li>
                ))}
              </ul>
            </article>

            <article
              className={style.blocksSection}
              aria-labelledby={`blocks-${index}`}
            >
              <ul className={style.blocksList}>
                {item.blocks.map((elem, i) => (
                  <li className={style.blockItem} key={i} itemProp="about">
                    {elem}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className={style.blockInfo}>
            <div>
              <ul>
                {cases.map((item, index) => (
                  <li key={index}>{item.title}</li>
                ))}
              </ul>
            </div>
            <article
              className={style.companySection}
              aria-labelledby={`company-${index}`}
            >
              <div className={style.info}>
                <span className={style.aboutCompany}>О компании</span>
                <div>
                  <h3 className={style.companyTitle} id={`company-${index}`}>
                    {item.titleCompany}
                  </h3>
                  <p
                    className={style.companyDescription}
                    itemProp="description"
                  >
                    {item.descriptionCompany}
                  </p>
                </div>
              </div>
              <ul className={style.media}>
                {item.socialMedia.map((media, i) => (
                  <li className={style.linkContainer} key={i}>
                    <Link className={style.link} href={media.link}>
                      <Images
                        src={`/media/${media.type}`}
                        alt={media.type}
                        classname={style.image}
                        height={21}
                        width={21}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </article>
      ))}
    </section>
  );
}
