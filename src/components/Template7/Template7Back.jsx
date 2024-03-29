import React, { memo } from "react";
import Call from "../../assets/image/Call";
import Home from "../../assets/image/Home";
import Mail from "../../assets/image/Mail";
import Template7BackStyle from "../Template7/Template7Back.style";
const Template7Back = memo(
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
      <Template7BackStyle>
        <div className={`${size} cardBack`}>
          <div className={`${size}-personInfo`}>
            <div className={`${size}-nameDiv`}>
              <p>
                <input
                  type="text"
                  value={data !== undefined ? data.name : "not"}
                  onChange={changeName}
                  className={`${size}-name`}
                />

                {/* <input>Kang sung hun</input> */}
              </p>
              <input
                type="text"
                value={data !== undefined ? data.job_type : "not"}
                onChange={changeJob}
                className={`${size}-position`}
              />
            </div>
            <div className={`${size}-logo`}>
              <h1>
                {/* <span className={`${size}-logo`}>D</span>
                <span className={`${size}-logo`}>G</span>
                <span className={`${size}-logo`}>S</span>
                <span className={`${size}-logo`}>W</span> */}
                <input
                  type="text"
                  onChange={changeGRADUATE}
                  value={data ? data.carriers[0].carrier_name : "not"}
                />
              </h1>
            </div>
          </div>
          <footer>
            <div className={`${size}-triangle1`}></div>
            <div className={`${size}-number`}>
              <Call />
              {/* <p className={`${size}-small`}>010-2340-1234</p> */}
              <input
                className="personInfoInput"
                type="text"
                value={
                  data !== undefined && data.user_info_list.length >= 1
                    ? data.user_info_list[0].value
                    : "not"
                }
                onChange={changeNumber}
              />
            </div>
            <div className={`${size}-triangle2`}></div>
            <div className={`${size}-mail`}>
              <Mail />
              {/* <p className={`${size}-small`}>12345@gmail.com</p> */}
              <input
                className="personInfoInput"
                type="text"
                value={
                  data !== undefined && data.user_info_list.length >= 2
                    ? data.user_info_list[1].value
                    : "not"
                }
                onChange={changeEmail}
              />
            </div>
            <div className={`${size}-triangle3`}></div>
            <div className={`${size}-adress`}>
              <Home />
              {/* <p>주소주소주소주소</p> */}
              <input
                className="personInfoInput"
                value={
                  data !== undefined && data.user_info_list.length >= 3
                    ? data.user_info_list[2].value
                    : "not"
                }
                onChange={changeGithub}
              />
            </div>
          </footer>
        </div>
      </Template7BackStyle>
    );
  }
);

export default Template7Back;
