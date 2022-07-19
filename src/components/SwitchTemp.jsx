import React from "react";
import Template1 from "./Template1/Template1Front";
import Template1Back from "./Template1/Template1Back";
import Template2Front from "./Template2/Template2Front";
import Template2Back from "./Template2/Template2Back";
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

const SwitchTemp = ({ templateNumber }) => {
  return (
    <>
      {templateNumber === 1 ? (
        <>
          <Template1 size="large" />
          <Template1Back size="large" />
        </>
      ) : templateNumber === 2 ? (
        <>
          <Template2Front size="large" />
          <Template2Back size="large" />
        </>
      ) : templateNumber === 4 ? (
        <>
          <Template4Front size="large" />
          <Template4Back size="large" />
        </>
      ) : templateNumber === 5 ? (
        <>
          <Template5Front size="large" />
          <Template5Back size="large" />
        </>
      ) : templateNumber === 6 ? (
        <>
          <Template6Front size="large" />
          <Template6Back size="large" />
        </>
      ) : templateNumber === 7 ? (
        <>
          <Template7Front size="large" />
          <Template7Back size="large" />
        </>
      ) : templateNumber === 8 ? (
        <>
          <Template8Front size="large" />
          <Template8Back size="large" />
        </>
      ) : (
        <>
          <Template9Front size="large" />
          <Template9Back size="large" />
        </>
      )}
    </>
  );
};

export default SwitchTemp;
