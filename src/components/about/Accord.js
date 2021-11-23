import React, { useState } from "react";
import "./accord.scss";

const Accord = ({ qn, ans, mode }) => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("");
  const toggle = () => {
    setShow(!show);
    setActive(active === "" ? "active" : "");
  };
  return (
    <div className={mode ? "accord lightAccord" : "accord darkAccord"}>
      <div className={`qn ${active}`}>
        <div className="drop">
          <h3 onClick={() => toggle()}>{show ? "-" : "+"}</h3>
        </div>
        <h3>{qn}</h3>
      </div>
      {show && <p className="ans">{ans}</p>}
    </div>
  );
};

export default Accord;
