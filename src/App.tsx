import './App.css';
import Login from './components/Login.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from './components/Register.tsx';
import Home from './components/home/Home.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
