import logo from "./logo.svg";
import "./App.css";
import React from "react";

function Greetings(props) {
  return <h1>Hello {props.name}</h1>;
}

function App() {
  return (
    <div className="App">
      <Greetings name="Aroob" />
    </div>
  );
}

export default App;
