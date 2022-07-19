import React, { memo } from "react";
import Template2FrontStyle from "./template2Front.style";

const Template2Front = memo(({ size }) => {
  return (
    <Template2FrontStyle>
      <div className={`${size}-front card`}>
        <div className={`${size}-title`}>
          <h1 className={`${size}-title1`}>DGSW HIGH SCHOOL</h1>
          <h2 className={`${size}-title2`}>dgsw.hs.kr</h2>
        </div>
      </div>
    </Template2FrontStyle>
  );
});

export default Template2Front;
