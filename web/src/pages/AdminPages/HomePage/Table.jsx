import React from "react";
import styles from "./HomePage.module.scss"
function Table({tableData, tableHeader}) {
    console.log(tableHeader)

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
              {tableData.map((row, index) => (
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