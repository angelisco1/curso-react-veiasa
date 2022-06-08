import { useInputField } from "../../hooks/useInputField";

const FormInput = (props) => {
  const { label, type, initialValue, validations } = props
  const [value, setValue, erroresValue] = useInputField(initialValue, validations)


  const labelMinus = label.toLowerCase()

  return (
    <div>
      <label htmlFor={labelMinus}>{label}:</label>
      <input type={type} id={labelMinus} name={labelMinus} value={value} onChange={(e) => setValue(e.target.value)} />
      <ul>
        {erroresValue.map(error => <li key={error.type}>{error.text}</li>)}
      </ul>
    </div>
  )
}

export default FormInput