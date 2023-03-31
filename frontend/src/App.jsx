import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Start } from "./components/Start";
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Home } from './components/Home';
import { Comunity } from './components/Comunity';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/comunity' element={<Comunity />} />
        <Route path='*' element={<p>Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
