import React, { memo } from "react";
import Template7Style from "./Template7Front.style";

const Template7Front = memo(
  ({
    size,
    data,
    changeName,
    changeJob,
    changeGRADUATE,
    changeNumber,
    changeEmail,
    changeGithub,
  }) => {
    return (
      <Template7Style>
        <div className={`${size} card`}>
          <div className={`${size}-stick1`}></div>
          <div className={`${size}-stick2`}></div>
          <div className={`${size}-stick3`}></div>
          <div className={`${size}-stick4`}></div>

          <input
            onChange={changeGRADUATE}
            value={data ? data.carriers[0].carrier_name : "not"}
            type="text"
            className={`${size}-highlight`}
          />
          {/* <span className={`${size}-highlight`}>D</span>aegu
          <span className={`${size}-highlight`}>S</span>oftware */}

          <div className={`${size}-triangle`}></div>
          <footer>
            <p>dgsw.hs.kr</p>
          </footer>
        </div>
      </Template7Style>
    );
  }
);

export default Template7Front;
