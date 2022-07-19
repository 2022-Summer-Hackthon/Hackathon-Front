import React, { memo } from "react";
import Call from "../../assets/image/Call";
import Home from "../../assets/image/Home";
import Mail from "../../assets/image/Mail";
import Template7BackStyle from "../Template7/Template7Back.style";
const Template7Back = memo(({ size }) => {
  return (
    <Template7BackStyle>
      <div className={`${size}`}>
        <div className={`${size}-personInfo`}>
          <div className={`${size}-nameDiv`}>
            <p>
              <span className={`${size}-name`}>강성훈</span> kang sung hun
            </p>
            <p className={`${size}-position`}>Developer | 2grade</p>
          </div>
          <div className={`${size}-logo`}>
            <h1>
              <span className={`${size}-logo`}>D</span>
              <span className={`${size}-logo`}>G</span>
              <span className={`${size}-logo`}>S</span>
              <span className={`${size}-logo`}>W</span>
            </h1>
          </div>
        </div>
        <footer>
          <div className={`${size}-triangle1`}></div>
          <div className={`${size}-number`}>
            <Call />
            <p className={`${size}-small`}>010-2340-1234</p>
          </div>
          <div className={`${size}-triangle2`}></div>
          <div className={`${size}-mail`}>
            <Mail />
            <p className={`${size}-small`}>12345@gmail.com</p>
          </div>
          <div className={`${size}-triangle3`}></div>
          <div className={`${size}-adress`}>
            <Home />
            <p>주소주소주소주소</p>
          </div>
        </footer>
      </div>
    </Template7BackStyle>
  );
});

export default Template7Back;
