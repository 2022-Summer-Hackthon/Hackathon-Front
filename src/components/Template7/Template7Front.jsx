import React, { memo } from "react";
import Template7Style from "./Template7Front.style";

const Template7Front = memo(({ size }) => {
  return (
    <Template7Style>
      <div className={`${size}`}>
        <div className={`${size}-stick1`}></div>
        <div className={`${size}-stick2`}></div>
        <div className={`${size}-stick3`}></div>
        <div className={`${size}-stick4`}></div>
        <h1>
          <span className={`${size}-highlight`}>D</span>aegu
          <span className={`${size}-highlight`}>S</span>oftware
        </h1>
        <div className={`${size}-triangle`}></div>
        <footer>
          <p>dgsw.hs.kr</p>
        </footer>
      </div>
    </Template7Style>
  );
});

export default Template7Front;
