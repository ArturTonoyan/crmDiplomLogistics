import React, { useState } from "react";
import styles from "./Authorization.module.scss";

function Authorization() {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  // const handleLogin = () => {
  //   Login(formData).then((LoginUserData) => {
  //     if (LoginUserData) {
  //       if (LoginUserData.role != "PATIENT") {
  //         navigate("/Registrar");
  //       } else {
  //         alert("Воспользуйтесь Клиентским входом!");
  //       }
  //     }
  //   });
  // };

  return (
    <div className={styles.AuthorRegistrar}>
      <div className={styles.box}>
        <div className={styles.container}>
          <h2>Вход в аккаунт Регистратора</h2>
          <input
            type="text"
            placeholder="Логин"
            name="login"
            value={formData.login}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Пароль"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />

          <button className={styles.button} >
            Войти
          </button>
        
        </div>
      </div>
    </div>
  );
}

export default Authorization;
