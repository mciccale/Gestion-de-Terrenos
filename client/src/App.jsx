import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import ListadoTerrenos from "./components/ListadoTerrenos";
import RegistroParcelas from "./components/RegistroParcelas";
import BajaParcela from "./components/BajaParcelas";
import Home from "./components/Home";
import ModificarTerreno from "./components/ModificarTerreno"
import ModificarParcela from "./components/ModificarParcela"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terrenos" element={<ListadoTerrenos />} />
          <Route path="/parcelas/registro" element={<RegistroParcelas />} />
          <Route path="/parcelas/baja" element={<BajaParcela />} />
          <Route path="/terrenos/modificar" element={<ModificarTerreno />} />
          <Route path="/parcelas/modificar" element={<ModificarParcela />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
