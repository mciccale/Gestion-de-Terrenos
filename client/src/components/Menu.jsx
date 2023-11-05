import { Routes, Route, Link } from "react-router-dom";
import ListadoTerrenos from "./ListadoTerrenos";
import RegistroParcelas from "./RegistroParcelas";
import BajaParcela from "./BajaParcelas";
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
        <Link style={padding} to="/parcelas/baja">
          Baja Parcelas
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terrenos" element={<ListadoTerrenos />} />
        <Route path="/parcelas/registro" element={<RegistroParcelas />} />
        <Route path="/parcelas/baja" element={<BajaParcela />} />
      </Routes>
    </>
  );
};
export default Menu;
