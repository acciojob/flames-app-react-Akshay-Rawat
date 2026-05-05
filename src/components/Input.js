import React, { useState } from "react";

const Input = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    if (!name1 || !name2) {
      setResult("Please Enter valid input");
      return;
    }

    let a = name1;
    let b = name2;
    for (let char of name1) {
      if (b.includes(char)) {
        a = a.replace(char, "");
        b = b.replace(char, "");
      }
    }

    let count = (a.length + b.length) % 6;

    let res = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];

    setResult(res[count]);
  };

  const clear = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <div>
      <input
        data-testid="input1"
        name="name1"
        placeholder="Enter First name"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
      />

      <input
        data-testid="input2"
        name="name2"
        placeholder="Enter Second name"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />

      <button data-testid="calculate_relationship" onClick={calculate}>
        Calculate Relationship Future
      </button>

      <button data-testid="clear" onClick={clear}>
        Clear
      </button>

      <h3 data-testid="answer">{result}</h3>
    </div>
  );
};

export default Input;