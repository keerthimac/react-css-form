import "./app.css";
import { useState, useRef } from "react";
import FromInput from "./components/FormInput";

function App() {
  const usernameRef = useRef();

  return (
    <div className='app'>
      <form>
        <FromInput refer={usernameRef} placeholder='Username' />
        <FromInput placeholder='Email' />
        <FromInput placeholder='First Name' />
        <FromInput placeholder='Last Name' />
      </form>
    </div>
  );
}

export default App;
