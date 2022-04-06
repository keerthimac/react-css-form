import "./formInput.css";

function FormInput(props) {
  const { id, label, onChange, ...inputProps } = props;

  return (
    <div className='formInput'>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
    </div>
  );
}

export default FormInput;
