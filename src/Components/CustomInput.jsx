import { useField } from "formik"

function CustomInput({label ,...props}) {
  const [field, meta] = useField(props);
  console.log("feild" ,field);
  console.log("meta" ,meta);

  return (
    <div>
        <label>{label}</label>
        <input {...field} {...props}></input>
        {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
    </div>
  )
}

export default CustomInput
