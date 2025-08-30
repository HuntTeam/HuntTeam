import Images from "app/Elements/Image";
import style from "./Developers.module.css";
import PicFound from "./PicFound";

export default function Founders() {
  return (
    <section className={style.section}>
      <div className={style.logoContainer}>
        <Images
          alt="Логотип веб-студии HuntTeam"
          src="/logoheader.svg"
          width={49}
          height={26}
          priority
          classname={style.logo}
        />
        <h2 className={style.title}>Творцы</h2>
      </div>

      <div className={style.foundersWrapper}>
        <article className={`${style.founderCard} ${style.reversed}`}>
          <div className={style.founderInfo}>
            <h3 className={style.founderName}>Ярослав Ушаков</h3>
            <h4 className={style.founderRole}>Веб-дизайнер</h4>
          </div>
          <PicFound dev={"designer"} isRevers={true} />
        </article>

        <div className={style.spacer}></div>

        <article className={style.founderCard}>
          <div className={style.founderInfo}>
            <h3 className={style.founderName}>Игорь Ушаков</h3>
            <h4 className={style.founderRole}>Программист</h4>
          </div>
          <PicFound dev={"developer"} isRevers={false} />
        </article>
      </div>
    </section>
  );
}
