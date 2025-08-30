import Link from "next/link";
import Images from "../Elements/Image";
import style from "./Footer.module.css";
import Change from "./Change";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={style.footer} role="contentinfo">
      <div className={style.container}>
        {/* Логотип с ссылкой на главную */}
        <Link href="/" aria-label="На главную страницу HuntTeam">
          <Images
            alt="Логотип HuntTeam - веб-студия разработки сайтов"
            classname={style.logo}
            width={50}
            height={89}
            src={"/footerLogo.svg"}
          />
        </Link>

        {/* Навигация с семантическими тегами */}
        <nav className={style.navigation} aria-label="Основная навигация">
          <ul className={style.navList}>
            <div className={style.flex}>
              <li className={style.navItem}>
                <Link href="/about" className={style.navLink}>
                  Веб-студия
                </Link>
              </li>
              <li className={style.navItem}>
                <Link href="/portfolio" className={style.navLink}>
                  Портфолио
                </Link>
              </li>
              <li className={style.navItem}>
                <Link href="/services" className={style.navLink}>
                  Услуги
                </Link>
              </li>
            </div>
            <div className={style.flex}>
              <li className={style.navItem}>
                <Link href="/reviews" className={style.navLink}>
                  Отзывы
                </Link>
              </li>
              <li className={style.navItem}>
                <Link href="/about#contacts" className={style.navLink}>
                  Связаться
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>

      <div className={style.bottomSection}>
        <Change />

        <div className={style.copyright}>
          <span>WebStudio HuntTeam © {currentYear}</span>
        </div>

        <a
          href="mailto:hello@huntteam.ru"
          className={style.emailLink}
          itemProp="email"
        >
          hello@huntteam.ru
        </a>
      </div>
    </footer>
  );
}
