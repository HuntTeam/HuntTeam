import style from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={style.container}>
      <div className={style.colors}>
        {" "}
        <svg
          width="414"
          height="355"
          viewBox="0 0 414 355"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_6_1921)">
            <path
              d="M-208 -102H150.724H227.949L284 135.114L150.724 83.9716L102.147 144.412L47.3418 83.9716L-52.3038 225L-208 155.261V-102Z"
              fill="url(#paint0_linear_6_1921)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_6_1921"
              x="-337.5"
              y="-231.5"
              width="751"
              height="586"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="64.75"
                result="effect1_foregroundBlur_6_1921"
              />
            </filter>
            <linearGradient
              id="paint0_linear_6_1921"
              x1="38"
              y1="-102"
              x2="38"
              y2="225"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1100FF" />
              <stop offset="1" stop-color="#FF0037" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={style.content}>
        <h1 className={style.title}>
          Веб-студия создающая<br/>креативные веб-продукты
        </h1>
        <h2 className={style.subtitle}>
          <span className={style.white}>Цифровое</span>
          <span>будущее для </span>
          <span>вашего бизнеса</span>
        </h2>
      </div>
    </section>
  );
}
