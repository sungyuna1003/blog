import React, { useState } from "react";
import "./App.css";
// import logo from "./logo.svg";

function App() {
  let [글제목, 글제목변경] = useState(["식당추천"], ["카페추천"]);

  // let posts = "restaurants";
  return (
    <div className="App">
      <div className="black-nav">
        <div>Yuna's blog</div>
      </div>
      <div className="list">
        <h3>{글제목[0]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[0]}</h3>
        <p>3월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[0]}</h3>
        <p>4월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
