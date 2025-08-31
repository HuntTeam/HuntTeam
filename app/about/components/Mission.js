import Images from "app/Elements/Image";
import style from "./Mission.module.css";

export default function Mission() {
  return (
    <section className={style.section}>
      <div className={style.header}>
        <div className={style.textBlock}>
          <p className={style.paragraph}>
            Мы понимаем, что текущее состояние сайтов у бизнеса в Хакасии
            оставляет желать лучшего. Даже топовые студии часто не могут
            предложить по-настоящему привлекательные и функциональные работы,
            которые выделяются на рынке
          </p>
        </div>
        <div className={style.missionBlock}>
          <h4 className={style.subtitle}>
            Обеспечить цифровую красотку как у природы хакасии
          </h4>
          <div className={style.missionContent}>
            <div className={style.iconsWrapper}>
              <Images
                alt={"Логотип HuntTeam в 3D"}
                classname={style.mini}
                height={36}
                width={57}
                src={"/miniicons/logo.png"}
              />
              <Images
                alt={"Хакассия в 3D"}
                classname={style.mini}
                height={33}
                width={46}
                src={"/miniicons/khks.png"}
              />
            </div>
            <h3 className={style.title}>
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 8L1 1M1 1V8.5M1 1H8.5"
                  stroke="white"
                  strokeOpacity="0.5"
                  strokeWidth="1.5"
                />
              </svg>
              это наша миссия
            </h3>
          </div>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.textAndVideo}>
          <h2 className={style.realyTitle}>Наша миссия</h2>

          <video
            className={style.video}
            src="/video/elk.webm"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className={style.defaultPic}>
          <Images
            alt={"Логотип HuntTeam в 3D"}
            classname={`${style.mini} ${style.horn}`}
            height={327}
            width={570}
            src={"/north.png"}
          />
        </div>
      </div>
    </section>
  );
}
