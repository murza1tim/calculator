import { useState } from "react";
import { StyledButton } from "./components/styled/styled-button/index.tsx";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("")

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = value => {
    if (
      ops.includes(value) && calc === "" ||
      ops.includes(value) && ops.includes(calc.slice(-1)
      )
    ) {
      return
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <StyledButton theme="primary" onClick={() => updateCalc(i.toString())} key={i}>{i}</StyledButton>
      )
    }

    return digits;
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1)

    setCalc(value);
  }



  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""}&nbsp;
          {calc || "0"}
        </div>
        <div className="operators">
          <StyledButton theme="secondary" onClick={() => updateCalc("/")}>/</StyledButton>
          <StyledButton theme="secondary" onClick={() => updateCalc("*")}>*</StyledButton>
          <StyledButton theme="secondary" onClick={() => updateCalc("+")}>+</StyledButton>
          <StyledButton theme="secondary" onClick={() => updateCalc("-")}>-</StyledButton>
          <StyledButton theme="secondary" onClick={() => deleteLast()}>C</StyledButton>
        </div>
        <div className="digits">
          {createDigits()}
          <StyledButton theme="primary" onClick={() => updateCalc("0")}>0</StyledButton>
          <StyledButton theme="primary" onClick={() => updateCalc(".")}>.</StyledButton>
          <StyledButton theme="primary" onClick={() => calculate()}>=</StyledButton>
        </div>
      </div>
    </div>
  );
}

export default App;
