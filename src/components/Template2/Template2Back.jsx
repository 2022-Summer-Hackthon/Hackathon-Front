import React from "react";
import Template2BackStyle from "./Template2Back.style";

const Template2Back = () => {
  return (
    <Template2BackStyle>
      <div className="back">
        <div className="intro">
          <h1 className="name">Kang SeongHun</h1>
          <h2 className="career">Developer</h2>
          <p className="text">더 좋은 개발자가 되고 싶은 강성훈입니다.</p>
        </div>
        <div className="border-right"></div>
        <div className="border-line"></div>

        <div className="info">
          <p className="call">010-2237-2925</p>
          <p className="git">github.com/ksh5324</p>
          <p className="adress">대구 달성군</p>
        </div>
      </div>
    </Template2BackStyle>
  );
};

export default Template2Back;
