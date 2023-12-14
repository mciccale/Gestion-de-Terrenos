import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MenuPrin from './components/Menu';
import ListadoTerrenos from './components/ListadoTerrenos';
import RegistroParcelas from './components/RegistroParcelas';
import BajaParcelas from './components/BajaParcelas';
import BajaTerrenos from './components/BajaTerrenos';
import Home from './components/Home';
import ModificarTerreno from './components/ModificarTerreno';
import ModificarParcela from './components/ModificarParcela';
import Terreno from './components/Terreno';
import Parcela from './components/Parcela';
import RegistroTerrenos from './components/RegistroTerrenos';
import RegistroArrendatarios from './components/RegistroArrendatarios';
import AltaAlquileres from './components/RegistroAlquileres';
import BajaArrendatarios from './components/BajaArrendatarios';
import ModificarArrendatario from './components/ModificarArrendatario';

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <MenuPrin />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terrenos" element={<ListadoTerrenos />} />
          <Route path="/terrenos/:id" element={<Terreno />} />
          <Route path="/terrenos/baja" element={<BajaTerrenos />} />
          <Route path="/terrenos/modificar" element={<ModificarTerreno />} />
          <Route path="/terrenos/registro" element={<RegistroTerrenos />} />
          <Route path="/parcelas/:id" element={<Parcela />} />
          <Route path="/parcelas/registro" element={<RegistroParcelas />} />
          <Route path="/parcelas/baja" element={<BajaParcelas />} />
          <Route path="/parcelas/modificar" element={<ModificarParcela />} />
          <Route path="/alquileres/registro" element={<AltaAlquileres />} />
          <Route path="/arrendatarios/registro" element={<RegistroArrendatarios />} />
          <Route path="/arrendatarios/eliminar" element={<BajaArrendatarios />} />
          <Route path="/arrendatarios/modificar" element={<ModificarArrendatario />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
