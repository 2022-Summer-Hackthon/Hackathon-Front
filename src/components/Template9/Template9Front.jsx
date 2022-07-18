import React, { memo } from "react";
import Template9FrontStyle from "./template9Front.style";
import Template9Logo from "../../assets/image/template9Logo";

const Template9Front = memo(({ size }) => {
  return (
    <Template9FrontStyle>
      <Template9Logo />
      <div className={`${size}-title`}>DGSW</div>
    </Template9FrontStyle>
  );
});

export default Template9Front;
