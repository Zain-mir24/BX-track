import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import BookPanel from "./Pages/Books/Bookpanel";
import ViewBook from "./Pages/ViewBooks/index"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookPanel />} />
        <Route path="/ViewBooks" element={<ViewBook />} />
      </Routes>
    </div>
  );
}

export default App;
