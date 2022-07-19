import React from "react";
import Template9BackStyle from "./template9Back.style";
import Template9Logo from "../../assets/image/template9Logo";
import { memo } from "react";
import Template9Logo2 from "../../assets/image/template9Logo2";

const Template9Back = memo(({ size }) => {
  return (
    <Template9BackStyle>
      <div className={`${size} cardBack`}>
        <div className={`${size}-logo`}>
          {size === "large" ? <Template9Logo2 /> : <Template9Logo />}
          <div className={`${size}-title`}>DGSW</div>
        </div>
        <div className={`${size}-stick`}></div>
        <div className={`${size}-info`}>
          <div className="personal">
            <div className="name">강성훈</div>
            <div className="career">Developer</div>
          </div>
          <div className="number">010-2237-2925</div>
          <div className="email">yolly050101@naver.com</div>
          <div className="address">대구광역시 달성군 구지면 창리로 11길 93</div>
          <div className="url">dgsw.hs.kr</div>
        </div>
      </div>
    </Template9BackStyle>
  );
});

export default Template9Back;
