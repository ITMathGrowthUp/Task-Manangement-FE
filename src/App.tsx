import './App.css'
import Login from './components/Login.tsx'
import {Route, Routes} from "react-router-dom";
import {Register} from "./components/Register.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      {/*</Routes>*/}
    </>
  )
}

export default App
