import Estilo from "./Estilo";
import { Link } from "react-router-dom";
import { Navbar, Button } from "@material-tailwind/react";

const Menu = () => {
  const padding = {};

  return (
    <>
      <Navbar className="mx-auto max-w-screen-xxl px-6 py-3 mb-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link style={padding} to="/">
            <Button variant="text">
              <Estilo texto="Home"></Estilo>
            </Button>
          </Link>
          <Link style={padding} to="/terrenos">
            <Button variant="text">
              <Estilo texto="Listado Terrenos"></Estilo>
            </Button>
          </Link>
          <Link style={padding} to="/terrenos/registro">
            <Button variant="text">
              <Estilo texto="Registro Terrenos"></Estilo>
            </Button>
          </Link>
          <Link style={padding} to="/parcelas/registro">
            <Button variant="text">
              <Estilo texto="Registro Parcelas"></Estilo>
            </Button>
          </Link>
          <Link style={padding} to="/parcelas/baja">
            <Button variant="text">
              <Estilo texto="Baja Parcelas"></Estilo>
            </Button>
          </Link>
          <Link style={padding} to="/terrenos/modificar">
            <Button variant="text">
              <Estilo texto="Modificar Terreno"></Estilo>
            </Button>
          </Link>
          <Link style={padding} to="/parcelas/modificar">
            <Button variant="text">
              <Estilo texto="Modificar Parcela"></Estilo>
            </Button>
          </Link>
          <Link style={padding} to="/terrenos/baja">
            <Button variant="text">
              <Estilo texto="Baja Terreno"></Estilo>
            </Button>
          </Link>
          <Link style={padding} to="/alquileres/baja">
            <Button variant="text">
              <Estilo texto="Baja Alquiler"></Estilo>
            </Button>
          </Link>
        </div>
      </Navbar>
    </>
  );
};

export default Menu;
