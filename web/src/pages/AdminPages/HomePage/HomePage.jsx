import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.scss";
import { tableHead, testData } from "./Data";
import Table from "../../../components/Table/Table";
function HomePage() {
  const [tableHeader, settebleHeader] = useState([]);
  const [tableData, settableData] = useState([]);

  useEffect(() => {
    settebleHeader(tableHead);
    settableData(testData);
  }, []);
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
        <Table tableHeader={tableHeader} tableData={tableData} />
      </div>
    </div>
  );
}

export default HomePage;
