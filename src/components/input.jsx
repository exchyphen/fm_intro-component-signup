import "./input.css";

const Input = (props) => {
  return props.errorActive ? (
    <div className="error-container">
      <input
        className="input-error-state"
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        required
      ></input>
      <div className="error-icon"></div>
      <div className="error-message">{props.errorMessage}</div>
    </div>
  ) : (
    <input
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      required
    ></input>
  );
};

export default Input;
