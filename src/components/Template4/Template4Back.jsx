import React, { memo } from "react";
import Template4BackStyle from "./template4Back.style";

const Template4Back = memo(({ size }) => {
  return (
    <Template4BackStyle>
      <div className={`${size}`}>
        <div className={`${size}-row-line`}></div>
        <div className={`${size}-column-line`}></div>
        <div className={`${size}-personal`}>
          <div className={`${size}-name`}>강성훈</div>
          <div className={`${size}-career`}>Developer</div>
        </div>
        <div className={`${size}-info-school`}>
          <div className={`${size}-name-number`}>
            <div className={`${size}-title`}>DGSW</div>
            <div className={`${size}-number`}>
              T <span>053-231-9240</span>
            </div>
          </div>
          <div className={`${size}-address`}>
            대구광역시 달성군 구지면 창리로 11길 93
          </div>
        </div>
        <div className={`${size}-info-personal`}>
          <div className={`${size}-mobile`}>
            <div className={`${size}-t`}>Mobile</div>
            <div className={`${size}-d`}>010-2237-2925</div>
          </div>
          <div className={`${size}-email`}>
            <div className={`${size}-t`}>E-mail</div>
            <div className={`${size}-d`}>yolly050101@naver.com</div>
          </div>
          <div className={`${size}-github`}>
            <div className={`${size}-t`}>Github</div>
            <div className={`${size}-d`}>github.com/ksh5324</div>
          </div>
        </div>
      </div>
    </Template4BackStyle>
  );
});

export default Template4Back;
