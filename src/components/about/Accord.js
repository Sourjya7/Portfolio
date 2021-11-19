import React, { useState } from "react";
import "./accord.scss";

const Accord = ({ qn, ans }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="qn">
        <div className="drop">
          <h3 onClick={() => setShow(!show)}>{show ? "-" : "+"}</h3>
        </div>
        <h3>{qn}</h3>
      </div>
      {show && <p>{ans}</p>}
    </>
  );
};

export default Accord;
