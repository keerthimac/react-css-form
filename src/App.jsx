import "./app.css";
import { useRef } from "react";
import FromInput from "./components/FormInput";

function App() {
  // const usernameRef = useRef("");
  // const userEmailRef = useRef("");
  // const firstNameRef = useRef("");
  // const lastNameRef = useRef("");

  const onFromSubmit = (e) => {
    e.preventDefault();
    // console.log(usernameRef.current.value);
    // console.log(userEmailRef.current.value);
    // console.log(firstNameRef.current.value);
    // console.log(lastNameRef.current.value);

    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <div className='app'>
      <form onSubmit={onFromSubmit}>
        <FromInput name='user name' placeholder='Username' />
        <FromInput name='email' placeholder='Email' />
        <FromInput name='First Name' placeholder='First Name' />
        <FromInput name='Last Name' placeholder='Last Name' />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
