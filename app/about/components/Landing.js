import Images from "app/Elements/Image";
import style from "./Landing.module.css";

export default function Landing() {
  return (
    <section className={style.section} aria-label="О студии">
      <div className={style.div}>
        {Array.from({ length: 6 }).map((item, index) => (
          <div className={style.imgWrapper} key={index}>
            <Images
              alt={"Кейс компании"}
              classname={style.img}
              height={300}
              width={300}
              src={`/grid/${index + 1}.png`}
            />
          </div>
        ))}
      </div>

      <div className={style.flex}>
        <h1 className={style.h1}>
          Супер креативная и молодая digiatal-студия из Абакана, которая своими
          работами показывает, что в этом мире осталось что-то прекрасное
        </h1>
        <h2 className={style.h2}>
          На что
          <br />
          способна
          <br />
          студия из
          <br />
          двух человек
        </h2>
      </div>
    </section>
  );
}
