import React, { memo } from "react";
import Template6FrontStyle from "./Template6Front.style";
import Zline from "../../assets/image/Zline";
import LargeZline from "../../assets/image/LargeZline";
const Template6Front = memo(({ size }) => {
  return (
    <Template6FrontStyle>
      <div className={`${size} card`}>
        <div>
          <span className={`${size}-highlightD`}>D</span>
          <span className={`${size}-highlightG`}>G</span>
          <p>software</p>
        </div>
        {size == "normal" ? <Zline /> : <LargeZline />}
      </div>
    </Template6FrontStyle>
  );
});

export default Template6Front;
