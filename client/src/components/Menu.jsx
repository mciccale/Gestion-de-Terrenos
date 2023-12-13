import Estilo from './Estilo';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Button,
  Menu,
  MenuHandler,
  MenuList,
} from '@material-tailwind/react';

const MenuPrin = () => {
  const padding = {};

  return (
    <>
      <Navbar className="mx-auto w-1/2 px-6 py-3 mb-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link style={padding} to="/">
            <Button variant="text">
              <Estilo texto="Home"></Estilo>
            </Button>
          </Link>
          <Menu>
            <MenuHandler>
              <Button variant="text">
                <Estilo texto="Terrenos"></Estilo>
              </Button>
            </MenuHandler>
            <MenuList>
              <div className="flex flex-col">
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
                <Link style={padding} to="/terrenos/modificar">
                  <Button variant="text">
                    <Estilo texto="Modificar Terreno"></Estilo>
                  </Button>
                </Link>
                <Link style={padding} to="/terrenos/baja">
                  <Button variant="text">
                    <Estilo texto="Baja Terreno"></Estilo>
                  </Button>
                </Link>
              </div>
            </MenuList>
          </Menu>
          <Menu>
            <MenuHandler>
              <Button variant="text">
                <Estilo texto="Parcelas"></Estilo>
              </Button>
            </MenuHandler>
            <MenuList>
              <div className="flex flex-col">
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
                <Link style={padding} to="/parcelas/modificar">
                  <Button variant="text">
                    <Estilo texto="Modificar Parcela"></Estilo>
                  </Button>
                </Link>
              </div>
            </MenuList>
          </Menu>
          <Menu>
            <MenuHandler>
              <Button variant="text">
                <Estilo texto="Alquileres"></Estilo>
              </Button>
            </MenuHandler>
            <MenuList>
              <div className="flex flex-col">
                <Link style={padding} to="/alquileres/baja">
                  <Button variant="text">
                    <Estilo texto="Baja Alquiler"></Estilo>
                  </Button>
                </Link>
                <Link style={padding} to="/alquileres/modificar">
                  <Button variant="text">
                    <Estilo texto="Modificar Alquiler"></Estilo>
                  </Button>
                </Link>
              </div>
            </MenuList>
          </Menu>
          <Menu>
            <MenuHandler>
              <Button variant="text">
                <Estilo texto="Arrendatarios"></Estilo>
              </Button>
            </MenuHandler>
            <MenuList>
              <div className="flex flex-col">
                <Link style={padding} to="/arrendatarios/registro">
                  <Button variant="text">
                    <Estilo texto="Registro Arrendatarios"></Estilo>
                  </Button>
                </Link>
              </div>
            </MenuList>
          </Menu>
        </div>
      </Navbar>
    </>
  );
};

export default MenuPrin;
