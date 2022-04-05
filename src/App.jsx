import "./app.css";
import { useRef } from "react";
import FromInput from "./components/FormInput";

function App() {
  const usernameRef = useRef("");
  const userEmailRef = useRef("");
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  
  
  const onFromSubmit = (e) => {
    e.preventDefault()
    // `current` points to the mounted text input element
    // usernameRef.current.focus();
    console.log(usernameRef.current.value)
    console.log(userEmailRef.current.value)
    console.log(firstNameRef.current.value)
    console.log(lastNameRef.current.value)
  };


  return (
    <div className='app'>
      <form onSubmit={onFromSubmit}>
        <FromInput refer={usernameRef} placeholder='Username'/>
        <FromInput refer={userEmailRef} placeholder='Email' />
        <FromInput refer={firstNameRef} placeholder='First Name' />
        <FromInput refer={lastNameRef} placeholder='Last Name' />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
