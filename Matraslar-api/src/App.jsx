import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import { useState } from "react";
import Admin from "./page/admin/Admin";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin/*"
          element={token ? <Admin token={token} /> : <Login data={{ token, setToken }} />}
        />
      </Routes>
    </>
  );
}

export default App;
