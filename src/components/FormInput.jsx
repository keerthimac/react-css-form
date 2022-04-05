import "./formInput.css";

function FormInput({ placeholder, refer }) {
  return (
    <div className='formInput'>
      {/* <label>Username</label> */}
      <input
        placeholder={placeholder}
        ref={refer}
      />
    </div>
  );
}

export default FormInput;
