import React, { useState } from "react";

function App() {
  let [name, setName] = useState("");
  let [headingText, setHeadingText] = useState("");

  function handleChange(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }

  function handleClick() {
    setHeadingText(name);
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
