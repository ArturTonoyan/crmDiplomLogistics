import Authorization from "./pages/Login/Authorization/Authorization";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Register from "./pages/Login/Register/Register";
import Styles from "./styles/globalStyle.scss"
import HomePage from "./pages/AdminPages/HomePage/HomePage";
function App() {

  return (
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Authorization/>}></Route>
            <Route path="/Register" element={<Register/>}></Route>
            <Route path="/HomePage" element={<HomePage/>}></Route>

          </Routes>
        </main>
      </BrowserRouter>
 
  );
}

export default App;
