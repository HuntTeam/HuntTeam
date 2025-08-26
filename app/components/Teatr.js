import style from "./Teatr.module.css";
import Image from "../Elements/Image";

export default function Teatr() {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <div className={style.slider}>
          <div className={style.sliderContent}>
            <div className={style.logoContainer}>
              <Image
                width={565}
                height={409}
                alt="Логотип"
                classname={style.sliderLogo}
                src="/sliderLogo.png"
              />
            </div>
            <h1 className={style.title}>
              <span className={style.titlePart}>HuntTeam Production</span>
              <span className={`${style.titlePart} ${style.light}`}>Web-Studia 2025</span>
            </h1>
            <h1 className={style.subtitle}>Разработчики</h1>
            <div className={style.teamMember}>
              <h2 className={style.memberName}>Ярослав Ушаков</h2>
              <ul className={style.skillsList}>
                <li className={style.skillItem}>Копирайтер</li>
                <li className={style.skillItem}>UX дизайнер</li>
                <li className={style.skillItem}>UI дизайнер</li>
                <li className={style.skillItem}>3D дизайнер</li>
                <li className={style.skillItem}>Менеджер</li>
                <li className={style.skillItem}>Арт-директор</li>
                <li className={style.skillItem}>Продуктовый дизайнер</li>
                <li className={style.skillItem}>Директор</li>
                <li className={style.skillItem}>Со-основатель</li>
                <li className={style.skillItem}>SMM специалист</li>
                <li className={style.skillItem}>Маркетолог</li>
              </ul>
            </div>
            <div className={style.teamMember}>
              <h2 className={style.memberName}>Игорь Ушаков</h2>
              <ul className={style.skillsList}>
                <li className={style.skillItem}>Фронтенд-разработчики</li>
                <li className={style.skillItem}>Бэкенд-разработчики</li>
                <li className={style.skillItem}>Верстальщик</li>
                <li className={style.skillItem}>Администратор</li>
                <li className={style.skillItem}>Тестировщик</li>
                <li className={style.skillItem}>Со-основатель</li>
                <li className={style.skillItem}>SEO-специалист</li>
                <li className={style.skillItem}>Менеджер</li>
                <li className={style.skillItem}>Девопс</li>
                <li className={style.skillItem}>Архитектор ПО</li>
                <li className={style.skillItem}>Директор</li>
              </ul>
            </div>
            <div className={style.reciept}>
              <article className={style.item}>
                <h3 className={style.titleRequest}>Автошкола</h3>
                <p className={style.text}>
                  С исполнителем очень легко было работать. Все замечания и
                  предложения учитывал. Предлагал свои идеи, большинство из
                  которых мы реализовали. Сайт получился как задумывалось.
                  Выполнен был раньше срока на 4 дня, что позволило ускорить
                  работу над версткой. Полностью довольна, надеюсь на дальнейшее
                  сотрудничество по развитию сайта)
                </p>
              </article>
              <article className={style.item}>
                <h3 className={style.titleRequest}>Строительство</h3>
                <p className={style.text}>
                  Отличный дизайнер с ответственным подходом!
                </p>
                <p className={style.text}>
                  Все отлично, не первый раз обращаюсь к данному специалисту,
                  выполняет работу качественно и раньше срока
                </p>
              </article>
              <article className={style.item}>
                <h3 className={style.titleRequest}>Юрисдикция</h3>
                <p className={style.text}>
                  Очень нравится оперативность и качество работы. Дизайнер
                  слышит все пожелания и воплощает их в работе
                </p>
              </article>
              <article className={style.item}>
                <h3 className={style.titleRequest}>Строительство</h3>
                <p className={style.text}>
                  Пизд#то, знаю что не наша верстка, но дизайн твой и он
                  охуе#ный
                </p>
              </article>
              <article className={style.item}>
                <h3 className={style.titleRequest}>Финансы</h3>
                <p className={style.text}>
                  Доброе утро, чекнул щас то что у тебя выходит, белая тема тоже
                  секс просто, цвета прям и стиль подобраны идеально
                </p>
              </article>
              <article className={style.item}>
                <h3 className={style.titleRequest}>Вы</h3>
                <p className={style.text}>
                  Можете сотрудничать с нами и оказаться здесь, написав нам
                  отзыв
                </p>
                <button className={style.request}>Заказать</button>
              </article>
            </div>
          </div>
        </div>
      </div>
      <Image
        alt="Люди"
        classname={style.people}
        width={1894}
        height={421}
        src="/peoples.png"
      />
    </section>
  );
}
