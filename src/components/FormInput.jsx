import "./formInput.css";

function FormInput({ placeholder }) {
  return (
    <div className='formInput'>
      <label>Username</label>
      <input placeholder={placeholder} />
    </div>
  );
}

export default FormInput;
