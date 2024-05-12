import React, { useState } from "react";
import styles from "./EditOrder.module.scss";
import HeadMenu from "../HeadMenu/HeadMenu";

const EditOredr = () => {
  const [cardData, setCardData] = useState([]);

  const handleInput = (el, key) => {
    const query = el.target.value;
    let date = cardData;
    date[key] = query;
    setCardData({ ...date });
  };

  const cancellation = () => {
    setCardData(cardData);
  };

  const handleSave = () => {};

  return (
    <div>
      <HeadMenu state={"register"} />
      <div className={styles.EditPatient}>
        <div>
          <h1>Редактирование заказа</h1>
          <div className={styles.data_container}>
            <div className={styles.leftbox}>
              <p>Клиент</p>
              <input
                type="text"
                placeholder="Фамилия"
                onChange={(el) => handleInput(el, "surname")}
                value={cardData.surname}
              />
              <input
                type="text"
                placeholder="Имя"
                onChange={(el) => handleInput(el, "name")}
                value={cardData.name}
              />
              <input
                type="text"
                placeholder="Отчество"
                onChange={(el) => handleInput(el, "patronymic")}
                value={cardData.patronymic}
              />
              <input
                type="text"
                placeholder="Телефон"
                onChange={(el) => handleInput(el, "passport")}
                value={cardData.passport}
              />
            </div>
            <div className={styles.centerbox}>
              <p>Заказ</p>
              <input
                type="text"
                placeholder="Тип транспорта"
                onChange={(el) => handleInput(el, "snils")}
                value={cardData.snils}
              />
              <input
                type="text"
                placeholder="Загрузка"
                onChange={(el) => handleInput(el, "oms")}
                value={cardData.oms}
              />
              <input
                type="text"
                placeholder="Разгрузка"
                onChange={(el) => handleInput(el, "phoneNumber")}
                value={cardData.phoneNumber}
              />
              <input
                type="text"
                placeholder="Период выполнения с ... по ..."
                onChange={(el) => handleInput(el, "birthDate")}
                value={cardData.birthDate}
              />
            </div>

            <div className={styles.rightbox}>
              <p>Груз</p>
              <input
                type="text"
                placeholder="Тип груза"
                onChange={(el) => handleInput(el, "snils")}
                value={cardData.snils}
              />
              <input
                type="text"
                placeholder="Мест"
                onChange={(el) => handleInput(el, "oms")}
                value={cardData.oms}
              />
              <input
                type="text"
                placeholder="Вес"
                onChange={(el) => handleInput(el, "phoneNumber")}
                value={cardData.phoneNumber}
              />
              <input
                type="text"
                placeholder="Объем"
                onChange={(el) => handleInput(el, "birthDate")}
                value={cardData.birthDate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditOredr;
