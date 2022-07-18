import React from "react";
import Template1BackStyle from "./template1Back.style";

const Template1Back = () => {
  return (
    <Template1BackStyle>
      <div className="back">
        <div className="school">
          <h1 className="title1">DGSW</h1>
          <h2 className="title1">dgsw.hs.kr</h2>
        </div>

        <div className="contents">
          <p className="career">Developer</p>
          <p className="name">강성훈</p>
        </div>

        <div className="info">
          <div className="flex">
            <p className="git">github.com/ksh5324</p>
            <p className="call">010-2237-2925</p>
          </div>
          <p className="notion">
            ksh5324.notion.site/ksh5324/c6e568cba1484be48d11c21568a06fe9
          </p>
        </div>
      </div>
    </Template1BackStyle>
  );
};

export default Template1Back;
