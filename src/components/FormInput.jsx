import "./formInput.css";

function FormInput({ placeholder, refer, name }) {
  return (
    <div className='formInput'>
      {/* <label>Username</label> */}
      <input
        placeholder={placeholder}
        name={name}
        // ref={refer}
      />
    </div>
  );
}

export default FormInput;
