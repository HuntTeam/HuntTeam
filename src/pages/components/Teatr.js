import style from "@/pages/components/Teatr.module.css";
import Image from "../Elements/Image";
export default function Teatr() {
  return (
    <article className={style.container}>
      <div className={style.slider}></div>
      <div>
        <Image
          alt={"Люди"}
          classNameImg={"pic"}
          src={"/peoples.png"}
          key={"People"}
        />
      </div>
    </article>
  );
}
