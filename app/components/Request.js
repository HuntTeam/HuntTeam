"use client";

import { useEffect, useState } from "react";
import style from "./Request.module.css";
import { useMutation } from "@tanstack/react-query";
import { requestApplication } from "app/api/request";
export default function Request() {
  const [requestData, setRequestData] = useState({
    link: "",
    file: null,
    message: "",
    client_name: "Без имени",
    price: 666667,
  });
  const { error, isError, isSuccess, isLoading, mutate } = useMutation({
    mutationKey: ["application"],
    mutationFn: () => requestApplication(requestData),
  });
  async function handleSendRequest(e) {
    e.preventDefault();
    if (requestData.link.length >= 5 || requestData.message.length >= 5) {
      await mutate();
      await setRequestData({
        link: "",
        file: null,
        message: "",
        client_name: "Без имени",
        price: 666667,
      });
    }
  }
  return (
    <section className={style.container}>
      <div className={style.header}>
        <div className={style.w75}>
          <h2 className={style.title}>
            Есть
            <br />
            задача?
          </h2>
          <p className={style.description}>
            Мы внимательно рассмотрит вашу заявку, чтобы оценить объем работы и
            предложить оптимальные решения. В любом случае, мы свяжемся с вами,
            чтобы обсудить детали и предложить вам лучшие варианты для
            достижения ваших целей. Заполните форму, и мы поможем вашему проекту
            начать путь к успеху!
          </p>
        </div>
      </div>
      <form className={style.inputs} method="post" action="/api/request">
        <div className={style.linkContainer}>
          <div>
            <div className={style.heading}>
              <label htmlFor="link" className={style.label}>
                Укажите контакт для обратной свзяи
              </label>
              <div className={style.svgLabel}>
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M1.85 5.95L9.9 9L9.4 0.499997H14L13.5 9L21.5 5.95L22.9 10.3L14.65 12.45L20 19.1L16.35 21.75L11.7 14.65L7.05 21.75L3.35 19.15L8.75 12.55L0.5 10.3L1.85 5.95Z"
                      fill="#FF0000"
                    />
                  </g>
                </svg>
              </div>
            </div>

            <div className={`${style.heading} ${style.inpAndSvgs}`}>
              <div className={`${style.svgs}`}>
                <div
                  className={
                    /^https?:\/\/t\.me|^t\.me/.test(requestData.link ?? "")
                      ? style.active
                      : ""
                  }
                >
                  <svg
                    width="19"
                    height="16"
                    viewBox="0 0 19 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.37027 6.46256C6.23283 4.34402 9.47529 2.94735 11.0977 2.27255C15.7299 0.345857 16.6924 0.0111694 17.3198 0.000117835C17.4578 -0.00231284 17.7663 0.0318834 17.9661 0.194045C18.1349 0.330971 18.1813 0.515938 18.2035 0.645759C18.2257 0.77558 18.2534 1.07132 18.2314 1.30239C17.9804 3.93989 16.8942 10.3404 16.3416 13.2944C16.1078 14.5444 15.6474 14.9635 15.2017 15.0045C14.2331 15.0937 13.4975 14.3644 12.5594 13.7494C11.0913 12.7871 10.262 12.188 8.83695 11.249C7.19012 10.1637 8.25769 9.56727 9.19622 8.59247C9.44184 8.33737 13.7097 4.45544 13.7923 4.10329C13.8026 4.05924 13.8122 3.89507 13.7147 3.80839C13.6171 3.7217 13.4732 3.75134 13.3693 3.77492C13.2221 3.80834 10.8768 5.35845 6.33361 8.42526C5.66792 8.88237 5.06496 9.10509 4.52473 9.09342C3.92917 9.08056 2.78355 8.75668 1.9319 8.47984C0.887311 8.14029 0.0570953 7.96077 0.129388 7.3841C0.167043 7.08374 0.580672 6.77656 1.37027 6.46256Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  className={
                    /^https?:\/\/vk\.com|^vk\.com/.test(requestData.link ?? "")
                      ? style.active
                      : ""
                  }
                >
                  <svg
                    width="25"
                    height="16"
                    viewBox="0 0 25 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4356 15.5C5.32113 15.5 0.692848 9.86937 0.5 0.5H4.56465C4.69816 7.37688 7.69465 10.2898 10.0682 10.8904V0.5H13.8956V6.43093C16.2395 6.17568 18.7017 3.47297 19.5324 0.5H23.3598C22.7219 4.16366 20.0517 6.86637 18.1529 7.97748C20.0517 8.87838 23.0929 11.2357 24.25 15.5H20.0369C19.132 12.6471 16.8773 10.4399 13.8956 10.1396V15.5H13.4356Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  className={
                    /^https?:\/\/tenchat\.ru|^tenchat\.ru/.test(
                      requestData.link ?? ""
                    )
                      ? style.active
                      : ""
                  }
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_6_2120)">
                      <path
                        d="M2.015 0H8.875H15.235C16.0027 0 16.625 0.622325 16.625 1.39V3.94333C16.625 4.71101 16.0027 5.33333 15.235 5.33333H12.9317C12.164 5.33333 11.5417 5.95566 11.5417 6.72333V14.61C11.5417 15.3777 10.9193 16 10.1517 16H8.875H7.59833C6.83066 16 6.20833 15.3777 6.20833 14.61V6.72333C6.20833 5.95566 5.58601 5.33333 4.81833 5.33333H2.015C1.24732 5.33333 0.625 4.71101 0.625 3.94333V1.39C0.625 0.622324 1.24732 0 2.015 0Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6_2120">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.625)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div
                  className={
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(requestData.link ?? "")
                      ? style.active
                      : ""
                  }
                >
                  <svg
                    width="22"
                    height="16"
                    viewBox="0 0 22 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.464582 15.2994L0.485047 3.37793L9.64212 8.9518C10.5449 9.50132 11.6815 9.48999 12.5732 8.92257L21.2862 3.37793L21.2657 15.3018C21.2651 15.6879 20.952 16.0004 20.5659 16.0004H1.16439C0.777425 16.0004 0.463918 15.6864 0.464582 15.2994Z"
                      fill="white"
                    />
                    <path
                      d="M1.49922 -0.000976562H20.2198C20.7968 -0.000976562 21.2645 0.466774 21.2645 1.04377C21.2645 1.391 21.092 1.71553 20.8042 1.90977L12.9876 7.18491C11.8397 7.95962 10.3403 7.97494 9.17682 7.22385L0.937439 1.90513C0.6419 1.71435 0.463379 1.38663 0.463379 1.03486C0.463379 0.462784 0.927141 -0.000976562 1.49922 -0.000976562Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <input
                className={style.input}
                type="text"
                id="link"
                value={requestData.link}
                onChange={(e) =>
                  setRequestData((prev) => {
                    return { ...prev, link: e.target.value };
                  })
                }
                required
                placeholder="Вставьте ссылку"
              />
            </div>
          </div>
          <div className={style.mt30}>
            <div>
              <label htmlFor="file" className={style.label}>
                {"Добавьте файл, будет круто если это - ТЗ <3"}
              </label>
            </div>
            <div className={`${style.input} ${style.fileInput}`}>
              <div className={style.center}>
                <p className={style.text}>
                  {requestData.file?.name || (
                    <>
                      Перетяните файл и<br /> положите в это поле
                    </>
                  )}
                </p>
                {!requestData.file?.name && (
                  <div>
                    <svg
                      width="27"
                      height="25"
                      viewBox="0 0 27 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5001 0.288086V17.6214M13.5001 17.6214L18.6213 12.5892M13.5001 17.6214L8.37891 12.5892"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <path
                        d="M0.5 19.9854H26.5"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <path
                        d="M5.62109 24.7129H21.3787"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <input
                type="file"
                id="file"
                name="file"
                onChange={(e) =>
                  setRequestData((prev) => {
                    return { ...prev, file: e.target.files[0] };
                  })
                }
                className={style.fileInputa}
                accept=".pdf,.doc,.docx,.txt"
              />
            </div>
          </div>
        </div>
        <div className={style.pic}>
          <video autoPlay loop muted playsInline className={style.video}>
            <source src="/video/tv.webm" type="video/webm" />
            Ваш браузер не поддерживает видео.
          </video>
        </div>

        <div className={style.price}>
          <div className={style.relative}>
            <textarea
              name="about"
              id="about_company"
              value={requestData.message}
              onChange={(e) =>
                setRequestData((prev) => {
                  return { ...prev, message: e.target.value };
                })
              }
              className={`${style.input} ${style.textarea}`}
              placeholder="Расскажите о компании в двух словах"
            ></textarea>

            <div className={style.svg}>
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M1.85 5.95L9.9 9L9.4 0.499997H14L13.5 9L21.5 5.95L22.9 10.3L14.65 12.45L20 19.1L16.35 21.75L11.7 14.65L7.05 21.75L3.35 19.15L8.75 12.55L0.5 10.3L1.85 5.95Z"
                    fill="#FF0000"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className={style.mt30}>
            <label htmlFor="price" list="price" className={style.label}>
              Укажите бюджет
            </label>
            <input
              type="range"
              className={style.inputRande}
              min={5000}
              value={requestData.price}
              onChange={(e) =>
                setRequestData((prev) => {
                  return { ...prev, price: e.target.value };
                })
              }
              max={1000000}
              name="price"
              id="price"
            />
            <p className={style.priceNumber}>
              {requestData.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
            </p>
          </div>
          <button
            type="submit"
            className={style.submit}
            onClick={handleSendRequest}
            disabled={
              requestData.link.length <= 5 ||
              requestData.message.length <= 5 ||
              isLoading
            }
          >
            Отправить
          </button>
        </div>
      </form>
    </section>
  );
}
