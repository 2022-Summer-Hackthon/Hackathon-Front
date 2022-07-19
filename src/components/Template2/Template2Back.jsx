import React, { memo } from "react";
import Template2BackStyle from "./Template2Back.style";

const Template2Back = memo(({ size }) => {
  return (
    <Template2BackStyle>
      <div className={`${size}-back cardBack`}>
        <div className={`${size}-intro`}>
          <h1 className={`${size}-name`}>Kang SeongHun</h1>
          <h2 className={`${size}-career`}>Developer</h2>
          <p className={`${size}-text`}>
            더 좋은 개발자가 되고 싶은 강성훈입니다.
          </p>
        </div>
        <div className={`${size}-border-right`}></div>
        <div className={`${size}-border-line`}></div>

        <div className={`${size}-info`}>
          <p className={`${size}-call`}>010-2237-2925</p>
          <p className={`${size}-git`}>github.com/ksh5324</p>
          <p className={`${size}-adress`}>대구 달성군</p>
        </div>
      </div>
    </Template2BackStyle>
  );
});

export default Template2Back;
