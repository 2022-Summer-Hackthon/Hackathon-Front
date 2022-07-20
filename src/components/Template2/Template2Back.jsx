import React, { memo } from "react";
import Github from "../../assets/image/Github";
import Template2BackStyle from "./Template2Back.style";

const Template2Back = memo(
  ({
    size,
    data,
    changeJob,
    changeNumber,
    changeEmail,
    changeGithub,
    changeGRADUATE,
  }) => {
    return (
      <Template2BackStyle>
        <div className={`${size}-back cardBack`}>
          <div className={`${size}-intro`}>
            <input
              className={`${size}-name`}
              value={data !== undefined ? data.carriers[0].carrier_name : "not"}
              onChange={changeGRADUATE}
            />
            <input
              className={`${size}-career`}
              value={data !== undefined ? data.job_type : "not"}
              onChange={changeJob}
            />
          </div>
          <div className={`${size}-border-right`}></div>
          <div className={`${size}-border-line`}></div>

          <div className={`${size}-info`}>
            <p className={`${size}-call`}>
              <Github />
              <input
                value={
                  data !== undefined && data.user_info_list.length >= 1
                    ? data.user_info_list[0].value
                    : "not"
                }
                onChange={changeNumber}
              />
            </p>
            <p className={`${size}-git`}>
              <Github />
              <input
                value={
                  data !== undefined && data.user_info_list.length >= 2
                    ? data.user_info_list[1].value
                    : "not"
                }
                onChange={changeEmail}
              />
            </p>
            <p className={`${size}-adress`}>
              <Github />
              <input
                value={
                  data !== undefined && data.user_info_list.length >= 3
                    ? data.user_info_list[2].value
                    : "not"
                }
                onChange={changeGithub}
              />
            </p>
          </div>
        </div>
      </Template2BackStyle>
    );
  }
);

export default Template2Back;
