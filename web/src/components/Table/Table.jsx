import React from "react";
import styles from "./Table.module.scss";
import { tableHead } from "./Data";
import DataContext from "../../context";
function Table() {
  const { context } = React.useContext(DataContext);

  const tableHeader = tableHead;
  console.log(tableHeader);

  return (
    <div className={styles.Table}>
      <table className={styles.TableInner}>
        <thead>
          <tr>
            {tableHeader.map((item) => (
              <th key={item.key}>{item.value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {context.tableData.map((row, index) => (
            <tr key={index}>
              {tableHeader.map((headerItem) => (
                <td key={headerItem.key}>{row[headerItem.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
