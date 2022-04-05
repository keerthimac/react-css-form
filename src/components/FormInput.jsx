import "./formInput.css";

function FormInput({ placeholder, setUsername, refer }) {
  return (
    <div className='formInput'>
      {/* <label>Username</label> */}
      <input
        placeholder={placeholder}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
}

export default FormInput;
