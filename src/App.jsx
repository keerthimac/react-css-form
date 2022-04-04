import "./app.css";
import FromInput from "./components/FormInput";

function App() {
  return (
    <div className='app'>
      <form>
        <FromInput placeholder='Username' />
        <FromInput placeholder='Email' />
        <FromInput placeholder='First Name' />
        <FromInput placeholder='Last Name' />
      </form>
    </div>
  );
}

export default App;
