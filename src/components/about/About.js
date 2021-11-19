import React, { useState } from "react";
import "./about.scss";
import pic from "../images/spmain.jpg";
import { ques } from "./ques";
import Accord from "./Accord";

function About() {
  const [data, setdata] = useState(ques);
  return (
    <div className="about">
      <div className="pic">
        <img src={pic} alt="" />
      </div>
      <div className="myData">
        {data.map((question) => {
          return <Accord key={question.id} {...question} />;
        })}
      </div>
    </div>
  );
}

export default About;
