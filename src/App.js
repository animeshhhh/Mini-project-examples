import React from "react";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState(" ");
  const [fullName, setFullName] = useState();

  const inputElement = (event) => {
    setName(event.target.value);
  };

  const onSubmit = () => {
    setFullName(name);
  };
  return (
    <>
      <div>
        <h1>Hello {fullName}</h1>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={inputElement}
          value={name}
        />

        <button onClick={onSubmit}> Click Me '</button>
      </div>
    </>
  );
};

export default App;
