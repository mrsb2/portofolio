import './App.css';
import {About, Home, Show} from './pages';
import {Navbar,Footer} from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/show" element={<Show />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </>

  );
}

export default App;



