import React, { memo } from "react";
import Template1 from "./Template1/Template1Front";
import Template1Back from "./Template1/Template1Back";
import Template2Front from "./Template2/Template2Front";
import Template2Back from "./Template2/Template2Back";
import Template3Front from "./Template3/Template3Front";
import Template3Back from "./Template3/Template3Back";
import Template4Front from "./Template4/Template4Front";
import Template4Back from "./Template4/Template4Back";
import Template5Front from "./Template5/Template5Front";
import Template5Back from "./Template5/Template5Back";
import Template6Front from "./Template6/Template6Front";
import Template6Back from "./Template6/Template6Back";
import Template7Front from "./Template7/Template7Front";
import Template7Back from "./Template7/Template7Back";
import Template8Front from "./Template8/Template8Front";
import Template8Back from "./Template8/Template8Back";
import Template9Front from "./Template9/Template9Front";
import Template9Back from "./Template9/Template9Back";

const SwitchTemp = memo(
  ({
    templateNumber,
    data,
    changeName,
    changeJob,
    changeGRADUATE,
    changeNumber,
    changeEmail,
    changeGithub,
  }) => {
    return (
      <>
        {templateNumber === 1 ? (
          <>
            <Template1 size="large" data={data} />
            <Template1Back
              size="large"
              data={data}
              changeName={changeName}
              changeJob={changeJob}
              changeGRADUATE={changeGRADUATE}
              changeNumber={changeNumber}
              changeEmail={changeEmail}
              changeGithub={changeGithub}
            />
          </>
        ) : templateNumber === 2 ? (
          <>
            <Template2Front size="large" data={data} />
            <Template2Back size="large" data={data} />
          </>
        ) : templateNumber === 3 ? (
          <>
            <Template3Front size="large" data={data} />
            <Template3Back size="large" data={data} />
          </>
        ) : templateNumber === 4 ? (
          <>
            <Template4Front size="large" data={data} />
            <Template4Back size="large" data={data} />
          </>
        ) : templateNumber === 5 ? (
          <>
            <Template5Front size="large" data={data} />
            <Template5Back size="large" data={data} />
          </>
        ) : templateNumber === 6 ? (
          <>
            <Template6Front size="large" data={data} />
            <Template6Back size="large" data={data} />
          </>
        ) : templateNumber === 7 ? (
          <>
            <Template7Front
              size="large"
              data={data}
              changeGRADUATE={changeGRADUATE}
            />
            <Template7Back
              size="large"
              data={data}
              changeName={changeName}
              changeJob={changeJob}
              changeGRADUATE={changeGRADUATE}
              changeNumber={changeNumber}
              changeEmail={changeEmail}
              changeGithub={changeGithub}
            />
          </>
        ) : templateNumber === 8 ? (
          <>
            <Template8Front size="large" data={data} />
            <Template8Back size="large" data={data} />
          </>
        ) : (
          <>
            <Template9Front size="large" data={data} />
            <Template9Back size="large" data={data} />
          </>
        )}
      </>
    );
  }
);

export default SwitchTemp;
