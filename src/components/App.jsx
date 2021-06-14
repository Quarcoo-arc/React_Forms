import React, { useState } from "react";

function App() {
  let [name, setName] = useState("");
  let newName;
  function getName(event) {
    setName(newName);
    console.log(newName);
    event.preventDefault();
  }
  function createName(event) {
    newName = event.target.value;
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <form action="">
        <input
          type="text"
          onChange={createName}
          placeholder="What's your name?"
          name="input"
        />
        <button onClick={getName}>Submit</button>
      </form>
    </div>
  );
}

export default App;
