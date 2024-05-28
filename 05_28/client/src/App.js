import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Sobrenos from './views/Sobrenos';

function App() {
  return (
    // só 1 elemento
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobrenos' element={<Sobrenos/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
