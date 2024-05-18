import { useState } from "react";
import "./App.css";
import { FaArrowAltCircleUp } from "react-icons/fa";

function App() {
  const [boll, setBoll] = useState("100px");
  const [position, setPosition] = useState("100px");

  function moveBallUp() {
    const boll = document.querySelector(".boll");
    boll.style.top = "200px";
  }

  function moveBallDown() {
    const boll = document.querySelector(".boll");
    boll.style.top = "500px";
  }

  function moveBallRight() {
    const boll = document.querySelector(".boll");
    boll.style.left = "1000px";
  }

  function moveBallLeft() {
    const boll = document.querySelector(".boll");
    boll.style.left = "200px";
  }

  return (
    <div className="App">
      <h1>Bella</h1>
      <button className="upp" onClick={moveBallUp}>
        <FaArrowAltCircleUp />
      </button>
      <br />
      <button className="ner" onClick={moveBallDown}>
        neråt
      </button>
      <br />
      <button className="höger" onClick={moveBallRight}>
        höger
      </button>
      <br />
      <button className="vänster" onClick={moveBallLeft}>
        vänster
      </button>
      <div className="boll"></div>
    </div>
  );
}

export default App;
