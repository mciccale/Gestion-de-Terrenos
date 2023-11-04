import { Routes, Route, Link } from "react-router-dom";
import ListadoTerrenos from "./ListadoTerrenos";
import RegistroParcelas from "./RegistroParcelas";
import Home from "./Home";
const Menu = () => {
  const padding = {
    padding: 5,
    color: "#FFF",
  };
  return (
    <>
      <div className="menu">
        <Link style={padding} to="/">
          Home
        </Link>
        <Link style={padding} to="/terrenos">
          Listado Terrenos
        </Link>
        <Link style={padding} to="/parcelas/registro">
          Registro Parcelas
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terrenos" element={<ListadoTerrenos />} />
        <Route path="/parcelas/registro" element={<RegistroParcelas />} />
      </Routes>
    </>
  );
};
export default Menu;
