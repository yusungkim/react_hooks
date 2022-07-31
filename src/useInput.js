import { useState } from "react";
import "./styles.css";

const useInput = (initialValue, validators) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value: newValue }
    } = event;
    let willUpdate = true;
    if (Array.isArray(validators)) {
      willUpdate = validators.reduce((passAll, validator) => {
        return (
          passAll && typeof validator === "function" && validator(newValue)
        );
      }, willUpdate);
    }
    if (willUpdate) {
      setValue(newValue);
    }
  };
  return { value, onChange };
};

export default function App() {
  const maxLen = (value) => value.length <= 10;
  const haveNotAtSign = (value) => !value.includes("@");
  const name = useInput("Mr.", [maxLen, haveNotAtSign]);

  return (
    <div className="App">
      <input placeholder="Name" {...name} />
    </div>
  );
}
