import Images from "app/Elements/Image";
import style from "./Contacts.module.css";

export default function Contacts() {
  const currentYear = new Date().getFullYear();

  return (
    <section className={style.section} id="contacts">
      <h2 className={style.title}>Контакты</h2>

      <div className={style.intro}>
        <p className={style.introText}>
          Хотите обсудить проект, задать вопрос?
        </p>
        <p className={style.text}>
          Вы можете написать каждому участнику команды HuntTeam лично или
          обратиться к нам в общем чате. Мы всегда на связи и открыты для
          диалога — будь то серьезный бизнес-запрос или просто интересная беседа
          о технологиях и дизайне.
        </p>
      </div>

      <div className={style.contactsGrid}>
        {/* Карточка Игоря */}
        <div
          className={style.contactCard}
          itemScope
          itemType="https://schema.org/Person"
        >
          <div className={style.member}>
            <div className={style.info}>
              <h3 className={style.name} itemProp="name">
                Игорь Ушаков
              </h3>
              <p className={style.role} itemProp="jobTitle">
                Программист
              </p>
            </div>
            <div
              className={style.photo}
              itemProp="image"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <Images
                alt="Игорь Ушаков - Программист"
                classname={style.img}
                height={74}
                width={74}
                src="/short_programmer.png"
              />
            </div>
          </div>
          <div className={style.beetween}>
            <ul className={style.links}>
              <li className={style.linkItem}>
                <a
                  className={style.link}
                  href="https://vk.com/u__i__s"
                  rel="me"
                  itemProp="sameAs"
                >
                  ВК
                </a>
              </li>
              <li className={style.linkItem}>
                <a
                  className={style.link}
                  href="mailto:tech@huntteam.ru"
                  itemProp="email"
                >
                  Почта
                </a>
              </li>
              <li className={style.linkItem}>
                <a
                  className={style.link}
                  href="https://wa.me/+79875584481"
                  itemProp="sameAs"
                >
                  WhatsApp
                </a>
              </li>
              <li className={style.linkItem}>
                <a
                  className={style.link}
                  href="https://t.me/O101O1O1O"
                  itemProp="sameAs"
                >
                  Telegram
                </a>
              </li>
            </ul>
            <p className={style.year}>{currentYear}</p>
          </div>
        </div>

        {/* Карточка компании HuntTeam */}
        <div
          className={style.contactCard}
          style={{ backgroundImage: "none", background: "red" }}
          itemScope
          itemType="https://schema.org/Organization"
        >
          <div className={style.member}>
            <div className={style.info}>
              <h3 className={style.name} itemProp="name">
                HuntTeam
              </h3>
              <p className={style.role} itemProp="description">
                Веб-студия
              </p>
            </div>
            <div
              className={style.photo}
              itemProp="logo"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <Images
                alt="Логотип HuntTeam"
                classname={style.img}
                height={74}
                width={74}
                src="/short_logo.svg"
              />
            </div>
          </div>
          <div className={style.beetween}>
            <ul className={style.links}>
              <li className={style.linkItem}>
                <a
                  className={style.link}
                  href="https://vk.com/huntteam"
                  rel="me"
                  itemProp="sameAs"
                >
                  ВК
                </a>
              </li>
              <li className={style.linkItem}>
                <a
                  className={style.link}
                  href="mailto:hello@huntteam.ru"
                  itemProp="email"
                >
                  Почта
                </a>
              </li>
              <li className={style.linkItem}>
                <a
                  className={style.link}
                  href="https://wa.me/+79969327411"
                  itemProp="sameAs"
                >
                  WhatsApp
                </a>
              </li>
              <li className={style.linkItem}>
                <a
                  className={style.link}
                  href="https://t.me/HuntTeam_Chat"
                  itemProp="sameAs"
                >
                  Telegram
                </a>
              </li>
            </ul>
            <p className={style.year}>{currentYear}</p>
          </div>
        </div>

        {/* Карточка Ярослава */}
        <div
          className={style.contactCard}
          itemScope
          itemType="https://schema.org/Person"
        >
          <div className={style.member}>
            <div className={style.info}>
              <h3 className={style.name} itemProp="name">
                Ярослав Ушаков
              </h3>
              <p className={style.role} itemProp="jobTitle">
                Дизайнер
              </p>
            </div>
            <div
              className={style.photo}
              itemProp="image"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <Images
                alt="Ярослав Ушаков - Дизайнер"
                classname={style.img}
                height={74}
                width={74}
                src="/short_designer.png"
              />
            </div>
          </div>
          <div className={style.beetween}>
            <ul className={style.links}>
              <li className={style.linkItem}>
                <a
                  className={style.link}
                  href="https://vk.com/YaroslavUshakov"
                  rel="me"
                  itemProp="sameAs"
                >
                  ВК
                </a>
              </li>
              <li className={style.linkItem}>
                <a
                  className={style.link}
                  href="mailto:designer@huntteam.ru"
                  itemProp="email"
                >
                  Почта
                </a>
              </li>
              <li className={style.linkItem}>
                <a
                  className={style.link}
                  href="https://wa.me/+79969327411"
                  itemProp="sameAs"
                >
                  WhatsApp
                </a>
              </li>
              <li className={style.linkItem}>
                <a
                  className={style.link}
                  href="https://t.me/YaroslavUshakov"
                  itemProp="sameAs"
                >
                  Telegram
                </a>
              </li>
            </ul>
            <p className={style.year}>{currentYear}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
