import React, { memo } from "react";
import Template3FrontStyle from "./Template3Front.style";

const Template3Front = memo(({ size }) => {
  return (
    <Template3FrontStyle>
      <div className={`${size}-front`}>
        <div className={`${size}-top`}></div>
        <div className={`${size}-bottom`}></div>
        <h1 className={`${size}-title1`}>DGSW</h1>
        <h2 className={`${size}-title2`}>frontend developer</h2>
      </div>
    </Template3FrontStyle>
  );
});

export default Template3Front;
