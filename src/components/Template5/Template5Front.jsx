import React, { memo } from "react";
import Template5Style from "./template5Front.style";

const Template5Front = memo(({ size }) => {
  return (
    <Template5Style>
      <div className={`${size}`}>
        <div className={`${size}-logo`}>
          <div className={`${size}-circle`}>D</div>
          <div className={`${size}-circle`}>G</div>
          <div className={`${size}-circle`}>S</div>
          <div className={`${size}-circle`}>W</div>
        </div>
      </div>
    </Template5Style>
  );
});

export default Template5Front;
