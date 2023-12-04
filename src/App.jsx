
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarLogOff from './Components/Navbar/NavOff/NavbarLogOff';
import Home from '../src/Pages/Home/Home';
import AnimaisCadastrados from '../src/Pages/AnimaisCadastrados/AnimaisCadastrados'
import Faq from '../src/Pages/Faq/Faq';
import Login from './Pages/Login/Login';
import Adote from './Pages/Adote/Adote';
import Perfil from './Pages/Perfil/Perfil';
import EsqueciSenha from './Pages/EsqueciSenha/EsqueciSenha';
import CadastroAnimal from '../src/Pages/Doe/Doe';
import Doe from '../src/Pages/Doe/Doe';
import AlterarPerfil from '../src/Pages/AlterarPerfil/AlterarPerfil';
import Footer from '../src/Components/Footer/Footer';
import Cadastro from '../src/Pages/Cadastro/Cadastro';
import SobrenosInicial from '../src/Pages/Sobrenos/SobrenosInicial/SobrenosInicial';
import SobreTrans from './Pages/Sobrenos/SobrenosTransp/SobreTrans';
import SobrenosAjudar from '../src/Pages/Sobrenos/SobrenosAjudar/SobrenosAjudar';
import NavbarLogin from './Components/Navbar/NavLogin/NavbarLogin';
import { useEffect, useState } from 'react';
import { AuthContextFunctions } from './AuthContext';
import AlterarPet from './Pages/AlterarPet/AlterarPet';'../src/Pages/AlterarPerfil/AlterarPerfil'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const logged = AuthContextFunctions.CheckUserLogin();
    setIsLoggedIn(logged);
  }, [])

  return (
    <div className="App">
      <Router>
        {
          isLoggedIn ? <NavbarLogin></NavbarLogin> : <NavbarLogOff></NavbarLogOff>
        }
        <Routes>
          <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/" element={<Home />} />
          <Route path="/SobrenosInicial" element={<SobrenosInicial />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/SobreTrans" element={<SobreTrans />} />
          <Route path="/SobrenosAjudar" element={<SobrenosAjudar />} />
          <Route path="/Adote" element={<Adote />} />
          <Route path='/AnimaisCadastrados' element={<AnimaisCadastrados/>}/>
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/CadastroAnimal" element={<CadastroAnimal />} />
          <Route path="/Doe" element={<Doe />} />
          <Route path="/EsqueciSenha" element={<EsqueciSenha />} />
          <Route path="/AlterarPerfil" element={<AlterarPerfil />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/AlterarPet" element={<AlterarPet />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
