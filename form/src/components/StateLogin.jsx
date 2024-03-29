import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("")
  // const [enteredPassword, setEnteredPassword] = useState("")
  const [enteredValues, setEnterValues] = useState({
    email: "",
    password: ""
  })

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  })

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@")

  function handleSubmit(event) {
    //HTTP 요청X
    event.preventDefault()
    console.log("User email: " + enteredEmail + " User Password: " + enteredPassword)

    setEnterValues({
      email: "",
      password: ""
    })
  }

  function handleInputChange(identifier, value) {
    setEnterValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }))
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false
    }))
  }

  function handleInputBlur(identifier) {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div classNamnpme="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email"
            onChange={(e) => handleInputChange("email", e.target.value)}
            value={enteredValues.email}
            onBlur={() => handleInputBlur("email")}
          />
          <div className="control-error">{emailIsInvalid && <p>유효한 이메일을 입력해주세요</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"
            onChange={e => handleInputChange("password", e.target.value)}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
