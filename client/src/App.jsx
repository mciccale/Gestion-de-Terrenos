import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import ListadoTerrenos from "./components/ListadoTerrenos";
import RegistroParcelas from "./components/RegistroParcelas";
import BajaParcelas from "./components/BajaParcelas";
import BajaTerrenos from "./components/BajaTerrenos";
import Home from "./components/Home";
import ModificarTerreno from "./components/ModificarTerreno";
import ModificarParcela from "./components/ModificarParcela";
import Terreno from "./components/Terreno";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Parcela from "./components/Parcela";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terrenos" element={<ListadoTerrenos />} />
          <Route path="/terrenos/:id" element={<Terreno />} />
          <Route path="/terrenos/baja" element={<BajaTerrenos />} />
          <Route path="/terrenos/modificar" element={<ModificarTerreno />} />
          <Route path="/parcelas/:id" element={<Parcela />} />
          <Route path="/parcelas/registro" element={<RegistroParcelas />} />
          <Route path="/parcelas/baja" element={<BajaParcelas />} />
          <Route path="/parcelas/modificar" element={<ModificarParcela />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
