import React, { useRef } from "react";
import "./App.css";

function App() {
  const inputEl = useRef(null);

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const parts = value.split("/");

    const rows = parts.map((part) => {
      let row: JSX.Element[] = [];

      for (let i = 0; i < parseInt(part); i++) {
        row = [...row, <div />];
      }

      return row;
    });
  };

  return (
    <div className="App">
      <input ref={inputEl} onChange={onChange} />
    </div>
  );
}

export default App;
