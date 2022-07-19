import React, { memo } from "react";
import Template8BackStyle from "./Template8Back.style";

const Template8Back = memo(({ size }) => {
  return (
    <Template8BackStyle>
      <div className={`${size}`}>
        <div className={`${size}-school`}>
          <span className={`${size}-title`}>
            Daegu
            <br />
            Software
            <br />
            Meister
            <br />
            Highschool
          </span>
          <span className={`${size}-schoolAdress`}>dgsw.hs.kr</span>
        </div>
        <div className={`${size}-info`}>
          <div className={`${size}-name`}>
            <p className={`${size}-title`}>
              강성훈 <span>Developer</span>
            </p>
            <p>mobile 010. 2237. 2945</p>
            <p>email yolly050101@naver.com</p>
          </div>
          <div>
            <p className={`${size}-title`}>대구소프트웨어마이스터고등학교</p>
            <p>대구광역시 달성군 구지면 창리로 11길 93</p>
          </div>
        </div>
      </div>
    </Template8BackStyle>
  );
});

export default Template8Back;
