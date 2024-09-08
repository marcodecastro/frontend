import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Inicial from './pages/Inicial';
import { UserProvider } from './UserContext';
import Membro from './pages/Membro';
import Esposa from './pages/Esposa';
import Filhos from './pages/Filhos';
import Simbolicos from './pages/Simbolicos';
import Filosoficos from './pages/Filosoficos';
import Adicionais from './pages/Adicionais';
import Apostolado from './pages/Apostolado';
import CapituloRealArco from './pages/CapituloRealArco';
import Casamento from './pages/Casamento';
import Comanderia from './pages/Comanderia';
import Instalacao from './pages/Instalacao';
import Reassuncao from './pages/Reassuncao';
import AdminPage from './pages/AdminPage';
import Profile from './pages/Profile';
import AdminSettings from './pages/AdminSettings';
import Comemoracoes from './pages/Comemoracoes';

//import './styles/reset.css';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>

          <Route path="/perfil" element={<Profile />} />
          <Route path="/comemoracoes" element={<Comemoracoes />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/settings" element={<AdminSettings />} />

          <Route path="/" element={<Home />} />
          <Route path="/registrar" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inicial" element={<Inicial />} />
          <Route path="/membro" element={<Membro />} />
          <Route path="/esposa" element={<Esposa />} />
          <Route path="/filhos" element={<Filhos />} />
          <Route path="/casamento" element={<Casamento/>} />
          <Route path="/simbolicos" element={<Simbolicos />} />
          <Route path="/filosoficos" element={<Filosoficos />} />
          <Route path="/adicionais" element={<Adicionais />} />
          <Route path="/apostolado" element={<Apostolado />} />
          <Route path="/capitulorealarco" element={<CapituloRealArco />} />
          <Route path="/comanderia" element={<Comanderia/>} />
          <Route path="/instalacao" element={<Instalacao/>} />
          <Route path="/reassuncao" element={<Reassuncao/>} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
