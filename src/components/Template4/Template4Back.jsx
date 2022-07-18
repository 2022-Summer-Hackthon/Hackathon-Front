import React, { memo } from "react";
import Template4BackStyle from "./template4Back.style";

const Template4Back = memo(({ size }) => {
  return (
    <Template4BackStyle>
      <div className="row-line"></div>
      <div className="column-line"></div>
      <div className="personal">
        <div className="name">강성훈</div>
        <div className="career">Developer</div>
      </div>
      <div className="info-school">
        <div className="name-number">
          <div className="title">DGSW</div>
          <div className="number">
            T <span>053-231-9240</span>
          </div>
        </div>
        <div className="address">대구광역시 달성군 구지면 창리로 11길 93</div>
      </div>
      <div className="info-personal">
        <div className="mobile">
          <div className="t">Mobile</div>
          <div className="d">010-2237-2925</div>
        </div>
        <div className="email">
          <div className="t">E-mail</div>
          <div className="d">yolly050101@naver.com</div>
        </div>
        <div className="github">
          <div className="t">Github</div>
          <div className="d">github.com/ksh5324</div>
        </div>
      </div>
    </Template4BackStyle>
  );
});

export default Template4Back;
