import React, { useState } from "react";

function App() {
  let [name, setName] = useState("");
  let newName;
  function getName() {
    setName(newName);
    console.log(newName);
  }
  function createName(event) {
    newName = event.target.value;
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input
        type="text"
        onChange={createName}
        placeholder="What's your name?"
        name="input"
      />
      <button onClick={getName}>Submit</button>
    </div>
  );
}

export default App;
