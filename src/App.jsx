import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from '../src/Components/Navbar/Navbar'
import Home from  '../src/Pages/Home/Home';
import Faq from  '../src/Pages/Faq/Faq';
import Login from './Pages/Login/Login'; 
import Adote from './Pages/Adote/Adote';
import Perfil from './Pages/Perfil/Perfil';
import EsqueciSenha from './Pages/EsqueciSenha/EsqueciSenha';
import CadastroAnimal  from '../src/Pages/Doe/Doe';
import Doe from '../src/Pages/Doe/Doe';
// import AnimaisCadastrados from '../src/Pages/AnimaisCadastrados/AnimaisCadastrados';
import AlterarSenha from '../src/Pages/AlterarSenha/AlterarSenha';
import AlterarPerfil from '../src/Pages/AlterarPerfil/AlterarPerfil';
import Footer from '../src/Components/Footer/Footer';
import Cadastro from '../src/Pages/Cadastro/Cadastro'
import SobrenosInicial from '../src/Pages/Sobrenos/SobrenosInicial/SobrenosInicial';
import SobreTrans from './Pages/Sobrenos/SobrenosTransp/SobreTrans'
import SobrenosAjudar from '../src/Pages/Sobrenos/SobrenosAjudar/SobrenosAjudar'
function App() {

  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/SobrenosInicial" element={<SobrenosInicial/>}/>
          <Route path="/Faq" element={<Faq />} />
          <Route path="/SobreTrans" element={<SobreTrans/>}/>
          <Route path="/SobrenosAjudar" element={<SobrenosAjudar/>} />
          <Route path="/Adote" element={<Adote/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Perfil" element={<Perfil/>} />
          <Route path="/CadastroAnimal " element={<CadastroAnimal/>} />
          <Route path="/Doe" element={<Doe/>} />
          {/* <Route path="/AnimaisCadastrados" element={<AnimaisCadastrados/>} /> */}
          <Route path="/AlterarSenha" element={<AlterarSenha/>} />
          <Route path="/EsqueciSenha" element={<EsqueciSenha/>} />
          <Route path="/EsqueciSenha" element={<EsqueciSenha/>} />
          <Route path="/AlterarPerfil" element={<AlterarPerfil/>} />
          <Route path="/Adote" element={<Adote/>} />
          <Route path="/Cadastro" element={<Cadastro/>} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App;

