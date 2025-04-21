import './App.css';
import Login from './features/auth/Login.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from './features/auth/Register.tsx';
import Home from './features/home/Home.tsx';

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
