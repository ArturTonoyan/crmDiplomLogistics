import Authorization from "./pages/Login/Authorization/Authorization";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Register from "./pages/Login/Register/Register";
import HomePage from "./pages/AdminPages/HomePage/HomePage";
import DataContext from "./context";
import { testData } from "./DataApi";
import "./styles/style.css";

function App() {
  const [tableData, setTableData] = useState(testData); // данные таблицы
  const [selectedTr, setSelectedTr] = useState(null); // выбранная строка
  const context = {
    tableData,
    setTableData,
    selectedTr,
    setSelectedTr,
  };

  return (
    <DataContext.Provider
      value={{
        context,
      }}
    >
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Authorization />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/HomePage" element={<HomePage />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
