import React, { memo } from "react";
import Template4FrontStyle from "./template4Front.style";

const Template4Front = memo(({ size }) => {
  return (
    <Template4FrontStyle>
      <div className={`${size}`}>
        <div className={`${size}-line`}></div>
        <div className={`${size}-title`}>DGSW</div>
        <div className={`${size}-url`}>dgsw.hs.kr</div>
      </div>
    </Template4FrontStyle>
  );
});

export default Template4Front;
