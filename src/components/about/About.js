import React, { useState } from "react";
import "./about.scss";
import pic from "../images/spmain.jpg";
import { ques } from "./ques";
import Accord from "./Accord";

function About({ mode }) {
  const [data, setdata] = useState(ques);
  return (
    <main className={mode ? "darkAbout" : "lightAbout"}>
      <div className="about">
        <div className="pic">
          <img src={pic} alt="" />
        </div>
      </div>
      <div className="myData">
        {data.map((question) => {
          return <Accord key={question.id} {...question} mode={mode} />;
        })}
      </div>
    </main>
  );
}

export default About;
