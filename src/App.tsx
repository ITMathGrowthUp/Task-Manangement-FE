import './App.css'
import { useForm } from "react-hook-form";
import Login from "./Login.tsx";

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
    <div>
      
    </div>
      <Login />
    </>
  );
}

export default App
