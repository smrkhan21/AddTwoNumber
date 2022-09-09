import { useState } from "react";
import "./styles.css";

export default function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [sum, setSum] = useState("");

  const Add = () => {
    const addition = parseFloat(value1) + parseFloat(value2);
    return setSum(addition);
  };

  return (
    <div className="main_div">
      <h2>Some of Two Number</h2>
      <div>
        <label>
          <span>
            Enter No. 1
            <input
              type="number"
              className="number1"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
            />
          </span>
        </label>
      </div>
      <div>
        <label>
          <span>
            Enter No. 2
            <input
              type="number"
              className="number2"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
            />
          </span>
        </label>
      </div>
      <button type="button" onClick={Add}>
        Add
      </button>
      <div>
        <h3>The sum is: {sum}</h3>
      </div>
    </div>
  );
}
