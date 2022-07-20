import React, { memo } from "react";
import Template2FrontStyle from "./template2Front.style";

const Template2Front = memo(({ size, data, changeGRADUATE, changeJob }) => {
  return (
    <Template2FrontStyle>
      <div className={`${size}-front card`}>
        <div className={`${size}-title`}>
          <input
            className={`${size}-title1`}
            value={data ? data.carriers[0].carrier_name : "not"}
            onChange={changeGRADUATE}
          />
          <input
            className={`${size}-title2`}
            value={data !== undefined ? data.job_type : "not"}
            onChange={changeJob}
          />
        </div>
      </div>
    </Template2FrontStyle>
  );
});

export default Template2Front;
