import React, { useContext } from "react";
import styles from "./HeadMenu.module.scss";
import { Link } from "react-router-dom";
import DataContext from "../../context";

function HeadMenu({ state, setFiltredData, filtredData }) {
  const { context } = useContext(DataContext);
  const accessToken = localStorage.getItem("accessToken");

  const deletePatien = () => {};
  console.log(
    "d",
    context.selectedTr,
    sessionStorage.getItem("idClientSelect")
  );
  const flag =
    context.selectedTr !== "null" &&
    sessionStorage.getItem("idClientSelect") !== "null"
      ? true
      : false;
  return (
    <>
      {state === "home" ? (
        <div className={styles.HeadMenu}>
          <Link to={flag && "./../Registrar/OutpatientCard"}>
            <button>
              <img src="./img/View.png" alt="View" />
              Создать
            </button>
          </Link>
          <Link to={flag && "./EditOrder"}>
            <button>
              <img src="./img/Edit.png" alt="View" />
              Редактировать
            </button>
          </Link>
          <Link to={flag && "./MakeAppointmentRegistrar"}>
            <button>
              <img src="./img/File_dock.png" alt="View" />
              Удалить
            </button>
          </Link>
          <Link to="./../Registrar/PatientRegistr">
            <button>
              <img src="./img/Add_ring.png" alt="View" />
              Добавить водителя
            </button>
          </Link>
          <button onClick={deletePatien}>
            <img src="./img/Trash.png" alt="View" />
            Добавить машину
          </button>
          <button onClick={deletePatien}>
            <img src="./img/Trash.png" alt="View" />
            Добавить клиента
          </button>
        </div>
      ) : state === "register" ? (
        <div className={styles.HeadMenu}>
          <Link to="./..">
            <button>
              <img src="./../img/Home.png" alt="View" />
              На главную
            </button>
          </Link>
        </div>
      ) : state === "HomeClient" ? (
        <div className={styles.HeadMenu}>
          <Link to="MakeAppointment">
            <button>
              <img src="./img/add.svg" alt="View" />
              Записаться на прием
            </button>
          </Link>
          <Link to="ViewMyAppointment">
            <button>
              <img src="./img/View.png" alt="View" />
              Мои записи на прием
            </button>
          </Link>
          <Link to="AccounClient">
            <button>
              <img src="./img/Home.png" alt="View" />
              Редактировать аккаунт
            </button>
          </Link>
        </div>
      ) : state === "ViewMyAppointment" ? (
        <div className={styles.HeadMenu}>
          <Link to="/Client">
            <button>
              <img src="./../img/Home.png" alt="View" />
              На Главную
            </button>
          </Link>
        </div>
      ) : (
        state === "card" && (
          <div className={styles.HeadMenu}>
            <Link to="./..">
              <button>
                <img src="./../img/Home.png" alt="View" />
                На главную
              </button>
            </Link>
            <Link to="./../MakeAppointmentRegistrar">
              <button>
                <img src="./../img/File_dock.png" alt="View" />
                Записать на прием
              </button>
            </Link>
            <Link to="./../EditPatient">
              <button>
                <img src="./../img/Edit.png" alt="View" />
                Редактировать
              </button>
            </Link>
          </div>
        )
      )}
    </>
  );
}

export default HeadMenu;
