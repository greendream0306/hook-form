import logo from './logo.svg';
import './App.css';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react'; 

function App() {
  const { register, handleSubmit } = useForm();
  const [ data, setDate ] = useState("");

  return (
    <div className="Form">
        <form onSubmit={ handleSubmit((data) => setDate(JSON.stringify(data))) }>
            <input {...register("name")} placeholder="your name>" /> <br />
            <input {...register("pass")} placeholder="pass" /> <br />
            {data}  <br />
            <input type="submit"/>
        </form>
    </div>
  );
}

export default App;
