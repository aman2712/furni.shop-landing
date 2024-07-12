import classes from "../styles/auth.module.css";

export default function InputField({
  label,
  type,
  id,
  value,
  onChange,
  autoComplete,
}) {
  return (
    <div className={classes.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={`Enter your ${label}`}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
