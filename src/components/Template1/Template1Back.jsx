import React, { memo } from "react";
import Template1BackStyle from "./template1Back.style";
import Github from "../../assets/image/Github";

const Template1Back = memo(
  ({ size, data, changeName, changeJob, changeGRADUATE }) => {
    return (
      <Template1BackStyle>
        <div className={`${size}-back`}>
          <div className={`${size}-school`}>
            <input
              className={`${size}-title1`}
              type="text"
              onChange={changeGRADUATE}
              value={data !== undefined ? data.carriers[0].carrier_name : "not"}
            />
          </div>
          <div className={`${size}-contents`}>
            <input
              className={`${size}-career`}
              value={data !== undefined ? data.job_type : "not"}
              onChange={changeJob}
            />
            <input
              className={`${size}-name`}
              value={data !== undefined ? data.name : "not"}
              onChange={changeName}
            />
          </div>
          <div className={`${size}-info`}>
            <div className="flex">
              <div>
                <Github />
                <input
                  className={`git`}
                  value={
                    data !== undefined && data.user_info_list.length >= 3
                      ? data.user_info_list[2].value
                      : "not"
                  }
                  onChange={changeName}
                />
              </div>
              <div>
                <Github />
                <input
                  className={`git`}
                  value={
                    data !== undefined && data.user_info_list.length >= 2
                      ? data.user_info_list[1].value
                      : "not"
                  }
                  onChange={changeName}
                />
              </div>
            </div>
            <p className={`${size}-notion`}>
              <Github />
              <input
                className={`git`}
                value={
                  data !== undefined && data.user_info_list.length >= 1
                    ? data.user_info_list[0].value
                    : "not"
                }
                onChange={changeName}
              />
            </p>
          </div>
        </div>
      </Template1BackStyle>
    );
  }
);

export default Template1Back;
