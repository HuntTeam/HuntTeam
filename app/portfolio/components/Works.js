"use client";
import Link from "next/link";
import style from "./Works.module.css";
import Images from "app/Elements/Image";
import Image from "next/image";
import { useState } from "react";

export default function Works() {
  const [active, setActive] = useState(0);
  const [pagination, setPagination] = useState(0);

  const handleChange = (index) => {
    setActive(index);
  };
  const stage = 5;
  const cases = [
    {
      title: "Терминал выдачи талонов",
      do: [
        {
          title: "Анализ ЦА",
          text: "Проводил наблюдения за клиентами разных возрастных групп, чтобы выявить, кто испытывает наибольшие трудности при использовании терминала.",
        },
        {
          title: "Выявление проблем",
          text: "Основные сложности у пожилых клиентов: мелкий шрифт и слишком сложное меню выбора.",
        },
        {
          title: "Поиск решения",
          text: "Собирал идеи по упрощению интерфейса: укрупнение шрифтов, подсказки и пошаговый сценарий работы.",
        },
        {
          title: "Реализация решений",
          text: "Сделал прототип в Figma, протестировал на небольшой группе пользователей.",
        },
        {
          title: "Реализация веб-терминала",
          text: "Написал клиентскую часть на React + TypeScript, использовал MobX для состояния.",
        },
      ],
      blocks: ["UX", "UI", "Финансы", "Веб-приложение"],
      picture: "#",
      titleCompany: "ПАО Росбанк",
      icon: "",
      descriptionCompany:
        "Крупный федеральный банк с широкой сетью отделений, предоставляющий услуги частным и корпоративным клиентам.",
      socialMedia: [
        { type: "dprofile.svg", link: "" },
        { type: "github.svg", link: "" },
        { type: "behance.svg", link: "" },
      ],
    },
    {
      title: "P-Bank",
      do: [
        {
          title: "Анализ ЦА",
          text: "Собрал статистику по использованию мобильного банка среди молодёжи и офисных работников.",
        },
        {
          title: "Выявление проблем",
          text: "Пользователи жаловались на долгую авторизацию и запутанную навигацию.",
        },
        {
          title: "Поиск решения",
          text: "Проработал вариант упрощённого входа через FaceID и оптимизацию главного меню.",
        },
        {
          title: "Реализация решений",
          text: "Сверстал новый дизайн, подготовил UI-kit, провёл юзабилити-тестирование.",
        },
        {
          title: "Реализация веб-терминала",
          text: "Реализовал серверную часть на Node.js с авторизацией через JWT.",
        },
      ],
      blocks: ["UX", "UI", "Мобильное приложение", "Финансы"],
      picture: "#",
      titleCompany: "ООО ФинТех Групп",
      icon: "",
      descriptionCompany:
        "Финтех-стартап, создающий продукты для управления личными финансами.",
      socialMedia: [
        { type: "dprofile.svg", link: "" },
        { type: "github.svg", link: "" },
        { type: "behance.svg", link: "" },
      ],
    },
    {
      title: "WebHunt",
      do: [
        {
          title: "Анализ ЦА",
          text: "Изучил поведение пользователей на сайтах вакансий и в IT-сообществах.",
        },
        {
          title: "Выявление проблем",
          text: "Много дублирующих вакансий, мало фильтров для поиска.",
        },
        {
          title: "Поиск решения",
          text: "Предложил агрегировать вакансии и добавить гибкую систему фильтрации.",
        },
        {
          title: "Реализация решений",
          text: "Разработал адаптивный UI с удобным поиском и тегами.",
        },
        {
          title: "Реализация веб-терминала",
          text: "Написал backend на Express + MongoDB, реализовал систему уведомлений.",
        },
      ],
      blocks: ["Fullstack", "Агрегатор", "IT", "Веб-приложение"],
      picture: "#",
      titleCompany: "Huntteam.ru",
      icon: "",
      descriptionCompany:
        "Стартап по автоматизации поиска IT-вакансий и кандидатов.",
      socialMedia: [
        { type: "dprofile.svg", link: "" },
        { type: "github.svg", link: "" },
        { type: "behance.svg", link: "" },
      ],
    },
    {
      title: "Спектрум",
      do: [
        {
          title: "Анализ ЦА",
          text: "Собирал обратную связь от студентов, изучающих 3D-моделирование.",
        },
        {
          title: "Выявление проблем",
          text: "Тяжёлые программы, сложный интерфейс и высокая цена ПО.",
        },
        {
          title: "Поиск решения",
          text: "Сконцентрировался на упрощённом софте для новичков с бесплатным доступом.",
        },
        {
          title: "Реализация решений",
          text: "Прототип интерфейса сделал в Figma, протестировал в вузе.",
        },
        {
          title: "Реализация веб-терминала",
          text: "Создал веб-приложение на Three.js для базового моделирования.",
        },
      ],
      blocks: ["UX", "UI", "3D", "Образование"],
      picture: "#",
      titleCompany: "Спектрум Lab",
      icon: "",
      descriptionCompany:
        "Учебная лаборатория, разрабатывающая продукты в сфере 3D и AR.",
      socialMedia: [
        { type: "dprofile.svg", link: "" },
        { type: "github.svg", link: "" },
        { type: "behance.svg", link: "" },
      ],
    },
    {
      title: "HuntAI",
      do: [
        {
          title: "Анализ ЦА",
          text: "Изучал потребности компаний в автоматизации HR-процессов.",
        },
        {
          title: "Выявление проблем",
          text: "Ручная обработка резюме занимает много времени.",
        },
        {
          title: "Поиск решения",
          text: "Предложил использование AI для анализа резюме и фильтрации кандидатов.",
        },
        {
          title: "Реализация решений",
          text: "Создал MVP чат-бота с интеграцией в Telegram.",
        },
        {
          title: "Реализация веб-терминала",
          text: "Поднял backend на FastAPI, подключил OpenAI API для обработки текста.",
        },
      ],
      blocks: ["AI", "HR-Tech", "Веб-приложение", "ML"],
      picture: "#",
      titleCompany: "HuntAI",
      icon: "",
      descriptionCompany:
        "Сервис для автоматизации рекрутинга с помощью искусственного интеллекта.",
      socialMedia: [
        { type: "dprofile.svg", link: "" },
        { type: "github.svg", link: "" },
        { type: "behance.svg", link: "" },
      ],
    },
    {
      title: "FinTrack",
      do: [
        {
          title: "Исследование рынка",
          text: "Собрал аналитику по привычкам пользователей мобильных банков.",
        },
        {
          title: "Создание прототипа",
          text: "Разработал кликабельный прототип в Figma для тестирования.",
        },
        {
          title: "Юзабилити-тестирование",
          text: "Провёл 5 интервью и собрал фидбек по интерфейсу.",
        },
        {
          title: "UI-дизайн",
          text: "Разработал минималистичный визуальный стиль приложения.",
        },
        {
          title: "Разработка MVP",
          text: "React Native + TypeScript, подключение Firebase.",
        },
      ],
      blocks: ["UX", "UI", "Финансы", "Mobile App"],
      picture: "#",
      titleCompany: "FinTech Solutions",
      icon: "",
      descriptionCompany:
        "Стартап в сфере финтеха, создающий мобильные решения для управления личными финансами.",
      socialMedia: [
        { type: "github.svg", link: "" },
        { type: "behance.svg", link: "" },
      ],
    },
    {
      title: "EduPortal",
      do: [
        {
          title: "Анализ конкурентов",
          text: "Собрал аналитику по образовательным платформам Skillbox, Coursera, Stepik.",
        },
        {
          title: "Разработка структуры",
          text: "Создал карту сайта и систему модулей для курсов.",
        },
        { title: "Вёрстка", text: "HTML5 + CSS3 + React, адаптивный дизайн." },
        { title: "Backend", text: "Node.js + MongoDB, JWT авторизация." },
        { title: "Запуск", text: "Деплой на Vercel + настройка CI/CD." },
      ],
      blocks: ["Образование", "UI", "Frontend", "Backend"],
      picture: "#",
      titleCompany: "Eduspace",
      icon: "",
      descriptionCompany:
        "IT-компания, разрабатывающая образовательные решения для онлайн-университетов.",
      socialMedia: [
        { type: "github.svg", link: "" },
        { type: "linkedin.svg", link: "" },
      ],
    },
    {
      title: "MediCare System",
      do: [
        {
          title: "Изучение потребностей врачей",
          text: "Интервью с 10 врачами поликлиники.",
        },
        {
          title: "UX-дизайн",
          text: "Создана удобная навигация для поиска карт пациентов.",
        },
        {
          title: "UI",
          text: "Внедрены цветовые акценты для статусов анализов.",
        },
        {
          title: "Интеграция с БД",
          text: "Подключение PostgreSQL + API FastAPI.",
        },
        {
          title: "Тестирование",
          text: "Unit-тесты, нагрузочные тесты JMeter.",
        },
      ],
      blocks: ["UX", "UI", "Здравоохранение", "Backend"],
      picture: "#",
      titleCompany: "MedTech Group",
      icon: "",
      descriptionCompany:
        "Компания по автоматизации здравоохранения, специализирующаяся на EHR-системах.",
      socialMedia: [
        { type: "behance.svg", link: "" },
        { type: "linkedin.svg", link: "" },
      ],
    },
    {
      title: "FoodExpress",
      do: [
        {
          title: "Маркетинговый анализ",
          text: "Исследовал конкурентов: Яндекс.Еда, Delivery Club.",
        },
        {
          title: "Проработка интерфейса",
          text: "Сделан быстрый поиск ресторанов и блюд.",
        },
        {
          title: "UI-дизайн",
          text: "Яркий акцентный стиль для привлечения клиентов.",
        },
        {
          title: "Разработка фронта",
          text: "React + Redux Toolkit, адаптив под мобильные.",
        },
        { title: "Оптимизация", text: "Lazy Loading, Code Splitting." },
      ],
      blocks: ["UX", "UI", "E-commerce", "Mobile"],
      picture: "#",
      titleCompany: "FoodTech",
      icon: "",
      descriptionCompany:
        "Сервис доставки еды нового поколения с упором на скорость и геймификацию.",
      socialMedia: [
        { type: "github.svg", link: "" },
        { type: "twitter.svg", link: "" },
      ],
    },
    {
      title: "AutoRent",
      do: [
        {
          title: "Анализ ЦА",
          text: "Определил боли пользователей при аренде авто онлайн.",
        },
        { title: "UX", text: "Простая форма бронирования в 3 шага." },
        { title: "UI", text: "Темный современный стиль с 3D элементами." },
        { title: "Фронтенд", text: "React + TypeScript + TailwindCSS." },
        { title: "Бэкенд", text: "NestJS + PostgreSQL + Swagger." },
      ],
      blocks: ["UX", "UI", "3D", "Transport"],
      picture: "#",
      titleCompany: "DriveNow",
      icon: "",
      descriptionCompany:
        "Платформа аренды автомобилей с интеграцией в туристические сервисы.",
      socialMedia: [
        { type: "linkedin.svg", link: "" },
        { type: "behance.svg", link: "" },
      ],
    },
    {
      title: "Shoply",
      do: [
        { title: "Бенчмаркинг", text: "Сравнил топ-10 онлайн-магазинов." },
        {
          title: "Проработка CJM",
          text: "Выявил критические точки при оформлении заказа.",
        },
        { title: "UI", text: "Сделал светлую минималистичную тему." },
        { title: "Оптимизация", text: "Внедрил SSR и кеширование данных." },
        { title: "Интеграция", text: "Подключил Stripe API для платежей." },
      ],
      blocks: ["UX", "UI", "E-commerce"],
      picture: "#",
      titleCompany: "EcomLab",
      icon: "",
      descriptionCompany:
        "Компания, создающая кастомные e-commerce решения под крупный ритейл.",
      socialMedia: [
        { type: "github.svg", link: "" },
        { type: "dribbble.svg", link: "" },
      ],
    },
    {
      title: "Evently",
      do: [
        {
          title: "Изучение юзеров",
          text: "Собрал инсайты от организаторов мероприятий.",
        },
        { title: "UX-дизайн", text: "Разработал личный кабинет организатора." },
        { title: "UI", text: "Цветовая схема — фиолетовый + градиенты." },
        { title: "Фронтенд", text: "Next.js + TailwindCSS + Framer Motion." },
        { title: "Тестирование", text: "E2E Cypress тесты." },
      ],
      blocks: ["UX", "UI", "Events"],
      picture: "#",
      titleCompany: "EventTech",
      icon: "",
      descriptionCompany:
        "Стартап для автоматизации планирования и посещаемости мероприятий.",
      socialMedia: [
        { type: "behance.svg", link: "" },
        { type: "linkedin.svg", link: "" },
      ],
    },
    {
      title: "HealthTrack",
      do: [
        {
          title: "Исследование",
          text: "Собрал данные о привычках фитнес-пользователей.",
        },
        {
          title: "Прототипирование",
          text: "Прототип мобильного приложения для трекинга здоровья.",
        },
        { title: "UI", text: "Светлая тема + иконки Material." },
        { title: "Разработка", text: "Flutter + Firebase." },
        { title: "Интеграция", text: "API Google Fit + Apple Health." },
      ],
      blocks: ["UX", "UI", "Health", "Mobile"],
      picture: "#",
      titleCompany: "FitLife",
      icon: "",
      descriptionCompany:
        "Компания-разработчик спортивных и медицинских приложений.",
      socialMedia: [
        { type: "github.svg", link: "" },
        { type: "twitter.svg", link: "" },
      ],
    },
    {
      title: "BuildPro",
      do: [
        {
          title: "Сбор требований",
          text: "Интервью с инженерами и архитекторами.",
        },
        { title: "UX", text: "Система фильтрации по проектам." },
        { title: "UI", text: "Строгий корпоративный стиль." },
        { title: "Frontend", text: "Angular + RxJS." },
        { title: "Backend", text: "Spring Boot + PostgreSQL." },
      ],
      blocks: ["UX", "UI", "Construction", "B2B"],
      picture: "#",
      titleCompany: "BuildTech",
      icon: "",
      descriptionCompany:
        "Компания-разработчик ПО для строительных организаций.",
      socialMedia: [
        { type: "linkedin.svg", link: "" },
        { type: "behance.svg", link: "" },
      ],
    },
    {
      title: "TravelGo",
      do: [
        {
          title: "Анализ рынка",
          text: "Оценка популярных туристических приложений.",
        },
        { title: "UX", text: "Упрощённый процесс покупки туров." },
        { title: "UI", text: "Живые фото и яркие иллюстрации." },
        { title: "Фронтенд", text: "React + Next.js." },
        { title: "Мобильное приложение", text: "React Native." },
      ],
      blocks: ["UX", "UI", "Travel", "Mobile"],
      picture: "#",
      titleCompany: "TravelHub",
      icon: "",
      descriptionCompany:
        "Международная компания в сфере туризма и бронирования путешествий.",
      socialMedia: [
        { type: "instagram.svg", link: "" },
        { type: "behance.svg", link: "" },
      ],
    },
    {
      title: "TravelGo",
      do: [
        {
          title: "Анализ рынка",
          text: "Оценка популярных туристических приложений.",
        },
        { title: "UX", text: "Упрощённый процесс покупки туров." },
        { title: "UI", text: "Живые фото и яркие иллюстрации." },
        { title: "Фронтенд", text: "React + Next.js." },
        { title: "Мобильное приложение", text: "React Native." },
      ],
      blocks: ["UX", "UI", "Travel", "Mobile"],
      picture: "#",
      titleCompany: "TravelHub",
      icon: "",
      descriptionCompany:
        "Международная компания в сфере туризма и бронирования путешествий.",
      socialMedia: [
        { type: "instagram.svg", link: "" },
        { type: "behance.svg", link: "" },
      ],
    },
    {
      title: "TravelGo",
      do: [
        {
          title: "Анализ рынка",
          text: "Оценка популярных туристических приложений.",
        },
        { title: "UX", text: "Упрощённый процесс покупки туров." },
        { title: "UI", text: "Живые фото и яркие иллюстрации." },
        { title: "Фронтенд", text: "React + Next.js." },
        { title: "Мобильное приложение", text: "React Native." },
      ],
      blocks: ["UX", "UI", "Travel", "Mobile"],
      picture: "#",
      titleCompany: "TravelHub",
      icon: "",
      descriptionCompany:
        "Международная компания в сфере туризма и бронирования путешествий.",
      socialMedia: [
        { type: "instagram.svg", link: "" },
        { type: "behance.svg", link: "" },
      ],
    },
  ];

  return (
    <section className={style.section} aria-labelledby="projects-title">
      {cases.slice(pagination, pagination + stage).map((item, index) => (
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
            <div className={style.pagList}>
              <ul className={style.listCase}>
                {cases.slice(pagination, pagination + stage).map((item, i) => (
                  <li
                    key={i}
                    onClick={() => handleChange(i)}
                    className={`${style.item} ${
                      i === active ? style.active : ""
                    }`}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
              <ul className={style.pagination}>
                {Array.from({ length: Math.ceil(cases.length / stage) }).map(
                  (_, indx) => (
                    <li
                      key={indx}
                      onClick={() => {
                        setPagination(indx * stage); 
                        setActive(0);
                      }}
                      className={`${style.pageItem} ${
                        pagination / stage === indx ? style.active : ""
                      }`}
                    >
                      {indx + 1}
                    </li>
                  )
                )}
              </ul>
            </div>

            <article
              className={style.companySection}
              aria-labelledby={`company-${index}`}
            >
              <div className={style.info}>
                <span className={style.aboutCompany}>О компании</span>
                <div>
                  <div className={style.flex}>
                    <Image
                      alt={item.titleCompany}
                      src={"/miniicons/rosbank.svg"}
                      width={27}
                      height={27}
                    />

                    <h3 className={style.companyTitle} id={`company-${index}`}>
                      {item.titleCompany}
                    </h3>
                  </div>
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
