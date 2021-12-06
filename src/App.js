/*eslint-disable*/

import React, { useState } from "react";
import "./App.css";
// import logo from "./logo.svg";

function App() {
  let [글제목, 글제목변경] = useState(["식당추천", "카페추천", "노래방추천"]);
  let [따봉, 따봉변경] = useState(0);

  function 제목변경() {
    var newArray = [...글제목];
    newArray[0] = "맛집추천";
    글제목변경(newArray);
  }
  function 제목정렬() {
    var newArray = [...글제목];
    newArray[0] = "맛집추천";
    글제목변경(newArray);
  }
  function 제목정렬() {
    var newArray = [...글제목];
    newArray = newArray.sort();
    글제목변경(newArray);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>Yuna's blog</div>
      </div>
      <button onClick={제목변경}>제목변경</button>
      <button onClick={제목정렬}>제목정렬</button>

      <div className="list">
        <h3>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>3월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>4월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
