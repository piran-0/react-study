import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [inputValue, setInputValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = inputValue.duration >= 1;

  function inputChangeHandler(inputId, value) {
    setInputValue((prev) => {
      return {
        ...prev,
        [inputId]: +value,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput
        valueChangeHandler={inputChangeHandler}
        userValue={inputValue}
      />
      {inputIsValid ? <Results userValue={inputValue} /> : <p className="center">올바른 값을 입력해주세요</p>}
    </>
  );
}

export default App;
