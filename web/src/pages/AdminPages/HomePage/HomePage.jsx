import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.scss";
import { Link } from "react-router-dom";
import PopUpNew from "../../../components/ PopUpNew/ PopUpNew";
import Table from "../../../components/Table/Table";
function HomePage() {
  const [tableHeader, settebleHeader] = useState([]);
  const [tableData, settableData] = useState([]);
  const [PopUpNewOpen, setPopUpNewOpen] = useState(false);

  return (
    <div className={styles.HomePage}>
      <div className={styles.HeadMenu}>
        <button onClick={() => setPopUpNewOpen(!PopUpNewOpen)}>
          Создать заказ
        </button>
        <button>Редактировать заказ</button>
        <button>Удалить заказ</button>
        <button>Добавить водителя</button>
        <button>Добавить машину</button>
        <button>Добавить клиента</button>
      </div>

      <div className={styles.Table}>
        <Table />
      </div>
      {PopUpNewOpen && <PopUpNew />}
    </div>
  );
}

export default HomePage;
