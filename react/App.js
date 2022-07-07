import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState(['치킨', '피자', '햄버거']);
  let [따봉, 따봉변경] = useState(0);
  let [따봉1, 따봉변경1] = useState(0);
  let [따봉2, 따봉변경2] = useState(0);

  function 함수() {
    console.log(1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>배달음식 좋아용</h4>
      </div>

      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '맛있겠다';
        copy[1] = '맛있겠다';
        copy[2] = '맛있겠다';
        글제목변경(copy);
      }}>뿅</button>

      <div className="list">
        <h4>{글제목[0]}<span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span>
          {따봉}</h4>
        <p>비비큐 먹고 싶다</p>
      </div>


      <div className="list">
      <h4>{글제목[1]}<span onClick={() => { 따봉변경1(따봉1 + 1) }}>👍</span>
          {따봉1}</h4>
        <p>도미노 피자 먹고 싶다</p>
      </div>
      <div className="list">
      <h4>{글제목[2]}<span onClick={() => { 따봉변경2(따봉2 + 1) }}>👍</span>
          {따봉2}</h4>
        <p>버거킹 먹고 싶다</p>
      </div>
      <Modal></Modal>

    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
