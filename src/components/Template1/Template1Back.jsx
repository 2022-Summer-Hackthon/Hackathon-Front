import React, { memo } from "react";
import Template1BackStyle from "./template1Back.style";
import Github from "../../assets/image/Github";

const Template1Back = memo(({ size, data }) => {
  return (
    <Template1BackStyle>
      <div className={`${size}-back cardBack`}>
        <div className={`${size}-school`}>
          <h1 className={`${size}-title1`}>
            {data ? data.carriers[0].carrier_name : "not"}
          </h1>
          <h2 className={`${size}-title2`}>dgsw.hs.kr</h2>
        </div>
        <div className={`${size}-contents`}>
          <p className={`${size}-career`}>{data ? data.job_type : "not"}</p>
          <p className={`${size}-name`}>{data ? data.name : "not"}</p>
        </div>
        <div className={`${size}-info`}>
          <div className="flex">
            <div>
              <Github />
              <p className="git">github.com/ksh5324</p>
            </div>
            <div>
              <Github />
              <p className="call">010-2237-2925</p>
            </div>
          </div>
          <p className={`${size}-notion`}>
            <Github />
            <span>
              ksh5324.notion.site/ksh5324/c6e568cba1484be48d11c21568a06fe9
            </span>
          </p>
        </div>
      </div>
    </Template1BackStyle>
  );
});

export default Template1Back;
