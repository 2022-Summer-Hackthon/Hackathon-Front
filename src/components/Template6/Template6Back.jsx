import React, { memo } from "react";
import Template6BackStyle from "./Template6Back.style";
import Zline from "../../assets/image/Zline";
import LargeZline from "../../assets/image/LargeZline";
const Template6Back = memo(({ size }) => {
  return (
    <Template6BackStyle>
      <div className={`${size} cardBack`}>
        <div className={`${size}-infoDiv`}>
          <div className="personInfo">
            <ul>
              <li>
                <span className={`${size}-infoTitle`}>Phone</span>
                <span className={`${size}-info`}>010-1234-1234</span>
              </li>
              <li>
                <span className={`${size}-infoTitle`}>Website</span>
              </li>
              <li>
                <span className={`${size}-infoTitle`}>E-mail</span>{" "}
                <span className="info">1234@gmail.com</span>
              </li>
              <li>
                <span className={`${size}-infoTitle`}>Adress</span>{" "}
                <span className={`${size}-info`}>대구</span>
              </li>
            </ul>
          </div>
          <div className={`${size}-nameDiv`}>
            <p className={`${size}-position`}>Developer</p>
            <p>
              <span className={`${size}-name`}>강성훈</span>
              <span className={`${size}-info`}> kang sung hun</span>
            </p>
          </div>
        </div>
        {size == "normal" ? <Zline /> : <LargeZline />}
      </div>
    </Template6BackStyle>
  );
});

export default Template6Back;
