import Images from "app/Elements/Image";
import style from "./Landing.module.css";
import Image from "next/image";

export default function ScrollElem() {
  return (
    <div className={style.scrollContainer}>
      <div className={style.relative}>
        <div className={`${style.sectionBlock} ${style.verticalContainer}`}>
          {Array.from({ length: 4 }).map((_, index) => (
            <Image
              key={index}
              alt="Картинка"
              className={style.img}
              width={553}
              height={629}
              src={`/scroll/one/${index + 1}.webp`}
            />
          ))}
        </div>

        <div className={`${style.sectionBlock} ${style.horizontalContainer}`}>
          {Array.from({ length: 8 }).map((_, index) => (
            <Image
              key={index}
              alt="Картинка"
              className={style.imgH}
              width={795}
              height={472}
              src={`/scroll/two/${index + 1}.png`}
            />
          ))}
        </div>

        <div className={`${style.verticalContainer} ${style.last}`}>
          {Array.from({ length: 4 }).map((_, index) => (
            <Image
              key={index}
              alt="Картинка"
              className={style.img}
              width={200}
              height={200}
              src={`/scroll/three/${index + 1}.png`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
