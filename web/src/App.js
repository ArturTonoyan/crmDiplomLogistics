import Authorization from "./pages/Login/Authorization/Authorization";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Register from "./pages/Login/Register/Register";
import HomePage from "./pages/AdminPages/HomePage/AdminPage";
import DataContext from "./context";
import { testData } from "./DataApi";
import "./styles/style.css";
import EditOredr from "./components/EditOrder/EditOrder";
import HomePageAdmin from "./pages/AdminPages/HomePageAdmin/HomePageAdmin";
import AdminPage from "./pages/AdminPages/HomePage/AdminPage";

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
            <Route path="/AdminPage/*" element={<AdminPage />}>
              <Route path="*" element={<HomePageAdmin />}></Route>
              <Route path="EditOrder" element={<EditOredr />}></Route>
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
