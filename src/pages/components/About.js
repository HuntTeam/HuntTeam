import style from "./About.module.css";
import Images from "../Elements/Image";
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
      <div className={style.scroll_bg}>
        <div className={style.scroll_container}>
          {/* Первый набор картинок */}
          <div className={style.img}>
            <Images
              alt="CMS"
              classname={style.imgItem}
              height={155}
              width={143}
              src="/line/cms.png"
            />
          </div>
          <div className={style.img}>
            <Images
              alt="Dino"
              classname={style.imgItem}
              height={155}
              width={143}
              src="/line/dino.png"
            />
          </div>
          <div className={style.img}>
            <Images
              alt="Image"
              classname={style.imgItem}
              height={155}
              width={143}
              src="/line/image.png"
            />
          </div>
          <div className={style.img}>
            <Images
              alt="KHA"
              classname={style.imgItem}
              height={155}
              width={143}
              src="/line/kha.png"
            />
          </div>
          <div className={style.img}>
            <Images
              alt="Logo"
              classname={style.imgItem}
              height={155}
              width={143}
              src="/line/logo.png"
            />
          </div>
          <div className={style.img}>
            <Images
              alt="Megafone"
              classname={style.imgItem}
              height={155}
              width={143}
              src="/line/megafone.png"
            />
          </div>
          <div className={style.img}>
            <Images
              alt="Telegram"
              classname={style.imgItem}
              height={155}
              width={143}
              src="/line/telegram.png"
            />
          </div>
          <div className={style.img}>
            <Images
              alt="VPN"
              classname={style.imgItem}
              height={155}
              width={143}
              src="/line/vpn.png"
            />
          </div>
          <div className={style.img}>
            <Images
              alt="Webdev"
              classname={style.imgItem}
              height={155}
              width={143}
              src="/line/webdev.png"
            />
          </div>
          <div className={style.img}>
            <Images
              alt="Webhunt"
              classname={style.imgItem}
              height={155}
              width={143}
              src="/line/webhunt.png"
            />
          </div>
          <div className={style.img}>
            <Images
              alt="WWW"
              classname={style.imgItem}
              height={155}
              width={143}
              src="/line/www.png"
            />
          </div>

          {/* Повторяем набор для бесшовной анимации */}
          <div className={style.img}>
            <Images
              alt="CMS"
              classname={style.imgItem}
              height={155}
              width={143}
              src="/line/cms.png"
            />
          </div>
          <div className={style.img}>
            <Images
              alt="Dino"
              classname={style.imgItem}
              height={155}
              width={143}
              src="/line/dino.png"
            />
          </div>
          <div className={style.img}>
            <Images
              alt="Image"
              classname={style.imgItem}
              height={155}
              width={143}
              src="/line/image.png"
            />
          </div>
          <div className={style.img}>
            <Images
              alt="KHA"
              classname={style.imgItem}
              height={155}
              width={143}
              src="/line/kha.png"
            />
          </div>
          <div className={style.img}>
            <Images
              alt="Logo"
              classname={style.imgItem}
              height={155}
              width={143}
              src="/line/logo.png"
            />
          </div>
          <div className={style.img}>
            <Images
              alt="Megafone"
              classname={style.imgItem}
              height={155}
              width={143}
              src="/line/megafone.png"
            />
          </div>
          <div className={style.img}>
            <Images
              alt="Telegram"
              classname={style.imgItem}
              height={155}
              width={143}
              src="/line/telegram.png"
            />
          </div>
          <div className={style.img}>
            <Images
              alt="VPN"
              classname={style.imgItem}
              height={155}
              width={143}
              src="/line/vpn.png"
            />
          </div>
          <div className={style.img}>
            <Images
              alt="Webdev"
              classname={style.imgItem}
              height={155}
              width={143}
              src="/line/webdev.png"
            />
          </div>
          <div className={style.img}>
            <Images
              alt="Webhunt"
              classname={style.imgItem}
              height={155}
              width={143}
              src="/line/webhunt.png"
            />
          </div>
          <div className={style.img}>
            <Images
              alt="WWW"
              classname={style.imgItem}
              height={155}
              width={143}
              src="/line/www.png"
            />
          </div>
        </div>
      </div>
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
