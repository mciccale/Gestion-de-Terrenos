import { Routes, Route, Link } from "react-router-dom";
import ListadoTerrenos from "./ListadoTerrenos";
import RegistroParcelas from "./RegistroParcelas";
import BajaParcela from "./BajaParcelas";
import Home from "./Home";
import ModificarTerreno from "./ModificarTerreno";
import ModificarParcela from "./ModificarParcela";
const Menu = () => {
  const padding = {
    padding: 5,
    color: "#FFF",
  };
  return (
    <>
      <div className="menu">
        <h1>Bienvenidos</h1>
        <Link style={padding} to="/">
          <button>Home</button>
        </Link>
        <Link  style={padding} to="/terrenos">
          <button>Listado Terrenos</button>
        </Link>
        <Link style={padding} to="/parcelas/registro">
          <button>Registro Parcelas</button>
        </Link>
        <Link style={padding} to="/parcelas/baja">
          <button>Baja Parcelas</button>
        </Link>
        <Link style={padding} to="/terrenos/modificar">
          <button>Modificar Terreno</button>
        </Link>
        <Link style={padding} to="/parcelas/modificar">
          <button>Modificar Parcela</button>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/terrenos" element={<ListadoTerrenos/>} />
        <Route path="/parcelas/registro" element={<RegistroParcelas />} />
        <Route path="/parcelas/baja" element={<BajaParcela />} />
        <Route path="/terrenos/modificar" element={<ModificarTerreno/>} />
        <Route path="/parcelas/modificar" element={<ModificarParcela/>} />
      </Routes>
    </>
  );
};
export default Menu;
