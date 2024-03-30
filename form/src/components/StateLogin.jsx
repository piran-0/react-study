import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js"

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("")
  // const [enteredPassword, setEnteredPassword] = useState("")
  const [enteredValues, setEnterValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email)
  const pwdIsInvalid = didEdit.password && !hasMinLength(enteredValues.password, 6)

  function handleSubmit(event) {
    //HTTP 요청X
    event.preventDefault();
    console.log(
      "User email: " + enteredEmail + " User Password: " + enteredPassword
    );

    setEnterValues({
      email: "",
      password: "",
    });
  }

  function handleInputChange(identifier, value) {
    setEnterValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => handleInputChange("email", e.target.value)}
          value={enteredValues.email}
          onBlur={() => handleInputBlur("email")}
          error={emailIsInvalid && "유효한 이메일을 적어주세요"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={(e) => handleInputChange("password", e.target.value)}
          value={enteredValues.password}
          onBlur={() => handleInputBlur("password")}
          error={pwdIsInvalid && "유효한 비밀번호를 적어주세요"}
        />

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
