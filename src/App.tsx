import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { DetailedPage } from "./components/DetailedPage";

enum RouteEnum {
  HOME_PAGE = "/",
  DETAILED_PAGE = "/detailed",
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={RouteEnum.HOME_PAGE} element={<HomePage />} />
          <Route path={RouteEnum.DETAILED_PAGE} element={<DetailedPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
