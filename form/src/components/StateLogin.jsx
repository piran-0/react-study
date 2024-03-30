import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js"
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const { value: emailValue, handleInputChange: handleEmailChange, handleInputBlur: handleEmailBlur, hasError: emailHasError }
    = useInput("", (value) => isEmail(value) && isNotEmpty(value))

  const { value: pwdValue, handleInputChange: handlePwdChange, handleInputBlur: handlePwdBlur, hasError: pwdHasError }
    = useInput("", value => hasMinLength(value, 6))

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || pwdHasError) {
      return
    }
    console.log(emailValue, pwdValue)
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
          onChange={handleEmailChange}
          value={emailValue}
          onBlur={handleEmailBlur}
          error={emailHasError && "유효한 이메일을 적어주세요"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handlePwdChange}
          value={pwdValue}
          onBlur={handlePwdBlur}
          error={pwdHasError && "유효한 비밀번호를 적어주세요"}
        />

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
