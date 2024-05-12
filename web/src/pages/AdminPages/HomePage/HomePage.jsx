import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.scss";
import Table from "../../../components/Table/Table";
function HomePage() {
  return (
    <div className={styles.HomePage}>
      <div className={styles.HeadMenu}>
        <button>Создать заказ</button>
        <button>Редактировать заказ</button>
        <button>Удалить заказ</button>
        <button>Добавить водителя</button>
        <button>Добавить машину</button>
        <button>Добавить клиента</button>
      </div>

      <div className={styles.Table}>
        <Table />
      </div>
    </div>
  );
}

export default HomePage;
