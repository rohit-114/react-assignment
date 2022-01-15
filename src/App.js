import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ShowPage from "./components/ShowPage";
import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieName" element={<ShowPage />} />
          <Route path="/form/:movieName" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
