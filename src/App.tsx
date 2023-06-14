import React, { useState } from "react";
import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="App">
      <button onClick={handleModalToggle}>모달창 열기</button>
      {modalOpen && (
        <div className="modal-overlay" onClick={handleModalToggle}></div> // 모달창 바깥의 영역을 클릭하면 모달창이 닫히도록 수정
      )}
      {modalOpen && (
        <div className="modal">
          <h2>Modal Content</h2>
        </div>
      )}
    </div>
  );
}

export default App;
