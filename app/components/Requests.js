"use client";

import Images from "app/Elements/Image";
import style from "./Requests.module.css";
import { useState } from "react";
import { requestApplication } from "app/api/request";
import { useMutation } from "@tanstack/react-query";

export default function Request() {
  const [requestData, setRequestData] = useState({
    link: "",
    file: null,
    client_name: "",
    price: 666667,
  });
  const [showModal, setShowModal] = useState(false);

  async function handleSendRequest(e) {
    e.preventDefault();
    if (
      requestData.link.length >= 5 ||
      !!requestData.client_name.trim().length
    ) {
      await mutate();
      setShowModal(true);
      await setRequestData({
        link: "",
        file: null,
        client_name: "",
        price: 666667,
      });
      setTimeout(() => setShowModal(false), 3000);
    }
  }
  const { isError, isSuccess, isLoading, mutate } = useMutation({
    mutationKey: ["application"],
    mutationFn: () => requestApplication(requestData),
  });
  return (
    <section className={style.section}>
      <div className={`${style.modal} ${showModal ? style.open : ""}`}>
        <div>
          {isError && (
            <p>
              Произошла ошибка при отправке
              <br />
              Заполните форму правильно
            </p>
          )}
        </div>

        <div>{isSuccess && <p>Заявка отправлена успешно!</p>}</div>
      </div>
      <form method="POST" action={"/api/request"}>
        <div className={style.container}>
          <div className={style.header}>
            <h2 className={style.title}>Оставить заявку</h2>
            <div className={style.content}>
              <p className={style.text}>
                Мы только начали работать и хотим, чтобы вы попробовали наши
                услуги. Поэтому мы сделали цены ниже.
              </p>
              <div className={style.marks}>
                <Images
                  alt={"Почтовая марка Хакасии"}
                  classname={style.mark}
                  height={72}
                  width={96}
                  src={"/marks/kha.png"}
                />
                <Images
                  alt={"Почтовая марка HuntTeam"}
                  classname={style.mark}
                  height={72}
                  width={96}
                  src={"/marks/huntteam.png"}
                />
              </div>
            </div>
          </div>
          <div className={style.mail}>
            <div className={style.mailContent}>
              <div className={style.flex}>
                <div>
                  <div className={style.heading}>
                    <label htmlFor="from" className={style.label}>
                      Кто
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
                  <input
                    type="text"
                    className={style.input}
                    placeholder="Имя"
                    value={requestData.client_name}
                    onChange={(e) =>
                      setRequestData((prev) => {
                        return { ...prev, client_name: e.target.value };
                      })
                    }
                    name="from"
                    required
                    id="from"
                  />
                </div>
                <div>
                  <div className={style.heading}>
                    <label htmlFor="to" className={style.label}>
                      Кому
                    </label>
                  </div>
                  <p className={style.input} style={{ paddingTop: "0px" }}>
                    Многоуважаемая команда HuntTeam
                  </p>
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
                    onChange={(e) =>
                      setRequestData((prev) => {
                        return { ...prev, file: e.target.files[0] };
                      })
                    }
                    name="file"
                    className={style.fileInputa}
                    accept=".pdf,.doc,.docx,.txt"
                  />
                </div>
              </div>
              <div className={style.mt33}>
                <div className={style.heading}>
                  <label htmlFor="link" className={style.label}>
                    Ссылка
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
                <input
                  type="text"
                  required
                  className={style.input}
                  placeholder="Вставьте ссылку куда отправить ответную весточку"
                  name="link"
                  value={requestData.link}
                  onChange={(e) =>
                    setRequestData((prev) => {
                      return { ...prev, link: e.target.value };
                    })
                  }
                  id="link"
                />
              </div>
            </div>
            <div className={style.image}>
              <Images
                alt={"Картинка почты"}
                classname={style.imges}
                src={"/post.png"}
                height={200}
                width={200}
              />
            </div>
            <div className={style.mailContent}>
              <div className={style.qu}>
                <div className={style.pink}></div>
                <p className={style.text}>
                  У нас небольшая команда, но лучшее качество и мы не тратим
                  деньги на аренду офиса, поскольку работаем удаленно. Все
                  деньги идут на работу специалистов и поддержку сайта.
                </p>
              </div>
              <div>
                <p className={style.priceNumber}>
                  {requestData.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                </p>
                <span className={style.noticeText}>
                  О каких суммах идет речь?
                </span>
                <input
                  type="range"
                  className={style.inputRande}
                  min={5000}
                  max={1000000}
                  value={requestData.price}
                  onChange={(e) =>
                    setRequestData((prev) => {
                      return { ...prev, price: e.target.value };
                    })
                  }
                  name="price"
                  id="price"
                />
                <div className={style.notice}>
                  <span className={style.noticeText}>
                    Нажимая кнопку “Отправить сообщение”, вы соглашаетесь с
                    нашей политикой в отношении обработки{" "}
                    <a href="/privacy" className={style.noticeLink}>
                      персональных данных
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className={style.submit}
          type="submit"
          onClick={handleSendRequest}
          disabled={
            requestData.link.trim().length <= 5 ||
            requestData.client_name.trim().length <= 5 ||
            isLoading
          }
        >
          Отправить письмо
        </button>
      </form>
    </section>
  );
}
