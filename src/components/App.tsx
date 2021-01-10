import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputEl = useRef(null);

  const [rows, setRows] = useState<JSX.Element[][]>([]);

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    
    const counts = value.split("/");

    let tempRow: JSX.Element[][]= [];

    const divRows = counts.map((part) => {
      let row: JSX.Element[] = [];

      for (let i = 0; i < parseInt(part); i++) {
        row = [...row, <div className="Item" />];
      }

      return <div className="Row">{row}</div>;
    });

    tempRow = [...tempRow, divRows];

    setRows(tempRow)
  };

  return (
    <div className="App">
      <input ref={inputEl} onChange={onChange} />

      <div className="Wrapper">{rows}</div>
    </div>
  );
}

export default App;
