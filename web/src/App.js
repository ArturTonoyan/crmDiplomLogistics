import Authorization from "./pages/Authorization/Authorization";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
function App() {

  return (
      <BrowserRouter>
        <main className="App">
          <Routes>
            <Route path="/" element={<Authorization/>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
 
  );
}

export default App;
