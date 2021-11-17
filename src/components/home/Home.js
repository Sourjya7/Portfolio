import React from "react";
import pic from "../images/spmain.jpg";
import "./home.scss";

function Home({ mode }) {
  return (
    <main className={!mode ? "homeLight" : "homeDark"}>
      <div className="desc">
        <p>UI/UX DESIGNER & DEVELOPER</p>
        <h3>I'm Sourjya Pal</h3>
      </div>
      <div className="pic">
        <img src={pic} alt="" />
      </div>
    </main>
  );
}

export default Home;
