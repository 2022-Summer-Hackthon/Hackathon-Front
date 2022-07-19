import React, { memo } from "react";
import Template8FrontStyle from "./Template8Front.style";
import Template8png from "../../assets/image/Template8png.png";
const Template8Front = memo(({ size }) => {
  return (
    <Template8FrontStyle>
      <div className={`${size}`}>
        <img src={Template8png} className={`${size}-img`} />
        <div className={`${size}-infoDiv`}>
          <span>대구소프트웨어마이스터고등학교</span>
          <span>dgsw.hs.kr</span>
        </div>
      </div>
    </Template8FrontStyle>
  );
});

export default Template8Front;
