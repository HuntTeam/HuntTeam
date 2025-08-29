import Images from "app/Elements/Image";
import style from "./Developers.module.css";

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
          <div className={`${style.w50}  ${style.reversed}`}>
            <div className={style.founderImage}>
              <Images
                alt={"#"}
                classname={style.reverse}
                height={449}
                width={226}
                src={"/designer.png"}
              />
              <div className={style.monkey}></div>
            </div>
            <div className={style.founderLogo}>
              <Images
                alt={"#"}
                classname={`${style.reverse} ${style.end}`}
                height={449}
                width={226}
                src={"/cutlogo.svg"}
              />
            </div>
          </div>
        </article>

        <div className={style.spacer}></div>

        <article className={style.founderCard}>
          <div className={style.founderInfo}>
            <h3 className={style.founderName}>Игорь Ушаков</h3>
            <h4 className={style.founderRole}>Программист</h4>
          </div>
          <div className={style.w50}>
            <div className={style.founderImage}>
              <Images
                alt={"#"}
                classname={style.reverse}
                height={449}
                width={226}
                src={"/developer.png"}
              />
              <div className={`${style.monkey} ${style.last}`}></div>
            </div>
            <div className={style.founderLogo}>
              <Images
                alt={"#"}
                classname={`${style.reverse} ${style.start}`}
                height={449}
                width={226}
                src={"/cutlogo.svg"}
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
