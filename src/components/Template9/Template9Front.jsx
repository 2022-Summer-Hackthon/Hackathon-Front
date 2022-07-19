import React, { memo } from "react";
import Template9FrontStyle from "./template9Front.style";
import Template9Logo from "../../assets/image/template9Logo";
import Template9Logo2 from "../../assets/image/template9Logo2";

const Template9Front = memo(({ size }) => {
  return (
    <Template9FrontStyle>
      <div className={`${size} card`}>
        {size === "large" ? <Template9Logo2 /> : <Template9Logo />}
        <div className={`${size}-title`}>DGSW</div>
      </div>
    </Template9FrontStyle>
  );
});

export default Template9Front;
