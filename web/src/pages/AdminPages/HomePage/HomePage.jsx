import React from "react";
import styles from "./HomePage.module.scss";
import Table from "../../../components/Table/Table";
import HeadMenu from "../../../components/HeadMenu/HeadMenu";
import DataContext from "../../../context";
import Header from "../../../components/Header/Header";
function HomePage() {
  const { context } = React.useContext(DataContext);

  return (
    <div className={styles.HomePage}>
      <Header />
      <HeadMenu
        state={"home"}
        setFiltredData={context.setTableData}
        filtredData={context.tableData}
      />

      <div className={styles.Table}>
        <Table />
      </div>
    </div>
  );
}

export default HomePage;
