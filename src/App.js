import './sass/custom.scss';
import './sass/layout.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import AcercaDe from './Pages/AcercaDe';
import Footer from './components/Footer';
import Buscador from './Pages/Buscador';
import Publicaciones from './Pages/Publicaciones';
import Multimedia from './Pages/Multimedia';








function App() {
  return (
    <BrowserRouter>
        <Header/>
     
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/buscador' element={<Buscador/>}/>
            <Route path='/publicaciones' element={<Publicaciones/>}/>
            <Route path='/multimedia' element={<Multimedia/>} /> 
            <Route path='/acercade' element={<AcercaDe/>} />  
            
          </Routes>
      <Footer/>
    </BrowserRouter>
  
    
  );
}

export default App;
