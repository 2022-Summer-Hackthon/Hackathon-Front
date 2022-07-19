import React, { memo } from "react";
import Template3BackStyle from "./Template3Back.style";

const Template3Back = memo(({ size }) => {
  return (
    <Template3BackStyle>
      <div className={`${size}-back cardBack`}>
        <div className={`${size}-info`}>
          <p className={`${size}-title3`}>DGSW</p>
          <p className={`${size}-title4`}>Care And Service</p>
        </div>
        <div className={`${size}-value`}>
          <p className={`${size}-job`}>Product Manager</p>
          <strong>
            <p className={`${size}-kang`}>강성훈</p>
          </strong>
          <p className={`${size}-adress`}>
            대구광역시 달성군 구지면 창리로11길 93
          </p>
          <p className={`${size}-tel`}>Tel. 053-231-9240</p>
          <p className={`${size}-mobile`}>Mobile. 010.2237.2925</p>
          <p className={`${size}-email`}>Email. yolly050101@naver.com</p>
          <p className={`${size}-git`}>Github. github.com/ksh5324</p>
        </div>
      </div>
    </Template3BackStyle>
  );
});

export default Template3Back;
