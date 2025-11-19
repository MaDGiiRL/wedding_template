import { Routes, Route } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registrati from "../pages/Registrati";
import RegistrazioneFornitori from "../pages/RegistrazioneFornitori";
export default function Routing() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrati" element={<Registrati />} />
        <Route path="/fornitori/registrazione" element={<RegistrazioneFornitori />} />
      </Route>
    </Routes>
  );
}
