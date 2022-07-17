import React from "react";
import Template5BackStyle from "./template5Back.style";

const Template5Back = () => {
  return (
    <Template5BackStyle>
      <div className="rogo">
        <div className="circle">D</div>
        <div className="circle">G</div>
        <div className="circle">S</div>
        <div className="circle">W</div>
      </div>

      <div className="info">
        <div className="important">
          <div className="name">강성훈</div>
          <div className="career">Developer</div>
        </div>
        <div className="other">
          <div className="number">
            M. <span>01022372925</span>
          </div>
          <div className="email">
            E. <span>yolly050101@naver.com</span>
          </div>
          <div className="github">
            G. <span>github.com/ksh5324</span>
          </div>
        </div>
      </div>
    </Template5BackStyle>
  );
};

export default Template5Back;
