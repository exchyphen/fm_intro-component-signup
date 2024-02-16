import { useState } from "react";
import Input from "./components/input";
import "./App.css";

function App() {
  const [inputValues, setInputValues] = useState(Array(4).fill(""));
  const [errorStates, setErrorStates] = useState(Array(4).fill(false));
  const [emailErrorMessage, setEmailErrorMessage] = useState(
    "Email cannot be empty"
  );

  const emailErrors = [
    "Email cannot be empty",
    "Looks like this is not an email",
  ];

  /** input information arrays*/
  const typeArr = ["text", "text", "email", "password"];

  const placeholderArr = [
    "First Name",
    "Last Name",
    "Email Address",
    "Password",
  ];

  const errorMessageArr = [
    "First name cannot be empty",
    "Last name cannot be empty",
    emailErrorMessage,
    "Password cannot be empty",
  ];

  const updateInputs = (index, str) => {
    setInputValues(inputValues.map((val, i) => (i === index ? str : val)));
  };

  /** helper function to create all inputs */
  const populateInputs = () => {
    const currInputs = Array(typeArr.length);
    for (let i = 0; i < typeArr.length; i++) {
      currInputs[i] = (
        <Input
          key={`input${i}`}
          name={`input${i}`}
          index={i}
          type={typeArr[i]}
          placeholder={placeholderArr[i]}
          onChange={(e) => updateInputs(i, e.target.value)}
          errorMessage={errorMessageArr[i]}
          errorActive={errorStates[i]}
          value={inputValues[i]}
        ></Input>
      );
    }

    return currInputs;
  };

  /** check inputs */
  function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
  }

  const checkInputs = (e) => {
    e.preventDefault();

    const currErrorState = Array(errorStates.length).fill(false);
    for (let i = 0; i < currErrorState.length; i++) {
      if (inputValues[i].length === 0) {
        currErrorState[i] = true;
      } else {
        currErrorState[i] = false;
      }
    }

    // make sure email error message is accurate
    if (currErrorState[2] === true && emailErrorMessage !== emailErrors[0]) {
      setEmailErrorMessage(emailErrors[0]);
    }

    // check email
    if (currErrorState[2] === false && !isEmail(inputValues[2])) {
      currErrorState[2] = true;
      setEmailErrorMessage(emailErrors[1]);
    }

    setErrorStates(currErrorState);
  };

  return (
    <>
      <div className="main-container">
        <div className="text-container">
          <h1>Learn to code by watching others</h1>
          <div className="description">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </div>
        </div>
        <div className="signup-container">
          <div className="trial-button">
            <span className="bold">Try it free 7 days</span> then $20/mo.
            thereafter
          </div>
          <form id="form" className="form-container" action="#">
            {populateInputs()}
            <button
              className="submit-button"
              type="submit"
              onClick={checkInputs}
            >
              claim your free trial
            </button>
            <div className="terms-and-services-text">
              By clicking the button, you are agreeing to our{" "}
              <span className="bold red">Terms and Services</span>
            </div>
          </form>
        </div>
      </div>
      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/exchyphen" target="_blank">
            exc
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
