import CustomSelect from "../common/Select/CustomSelect";
import SelectTemplate from "../common/Select/SelectTemplate";
import FinishStyle from "./finish.style";

import React, { lazy, useEffect, useState } from "react";
import Template1FrontPng from "../../assets/image/Template1FrontPng.png";
import Template1BackPng from "../../assets/image/Template1BackPng.png";

import Template2FrontPng from "../../assets/image/Template2FrontPng.png";
import Template2BackPng from "../../assets/image/Template2BackPng.png";

import Template3FrontPng from "../../assets/image/Template3FrontPng.png";
import Template3BackPng from "../../assets/image/Template3BackPng.png";

import Template4FrontPng from "../../assets/image/Template4FrontPng.png";
import Template4BackPng from "../../assets/image/Template4BackPng.png";

import Template5FrontPng from "../../assets/image/Template5FrontPng.png";
import Template5BackPng from "../../assets/image/Template5BackPng.png";

import Template6FrontPng from "../../assets/image/Template6FrontPng.png";
import Template6BackPng from "../../assets/image/Template6BackPng.png";

import Template7FrontPng from "../../assets/image/Template7FrontPng.png";
import Template7BackPng from "../../assets/image/Template7BackPng.png";

import Template8FrontPng from "../../assets/image/Template8FrontPng.png";
import Template8BackPng from "../../assets/image/Template8BackPng.png";

import Template9FrontPng from "../../assets/image/Template9FrontPng.png";
import Template9BackPng from "../../assets/image/Template9BackPng.png";
import SwitchTemp from "../SwitchTemp";

// const Template1FrontPng = lazy(() =>
//   import("../../../assets/image/Template1FrontPng.png")
// );
// const Template1BackPng = lazy(() =>
//   import("../../../assets/image/Template1BackPng.png")
// );

// const Template2FrontPng = lazy(() =>
//   import("../../../assets/image/Template2FrontPng.png")
// );
// const Template2BackPng = lazy(() =>
//   import("../../../assets/image/Template2BackPng.png")
// );

// const Template3FrontPng = lazy(() =>
//   import("../../../assets/image/Template3FrontPng.png")
// );
// const Template3BackPng = lazy(() =>
//   import("../../../assets/image/Template3BackPng.png")
// );

// const Template4FrontPng = lazy(() =>
//   import("../../../assets/image/Template4FrontPng.png")
// );
// const Template4BackPng = lazy(() =>
//   import("../../../assets/image/Template4BackPng.png")
// );

// const Template5FrontPng = lazy(() =>
//   import("../../../assets/image/Template5FrontPng.png")
// );
// const Template5BackPng = lazy(() =>
//   import("../../../assets/image/Template5BackPng.png")
// );

// const Template6FrontPng = lazy(() =>
//   import("../../../assets/image/Template6FrontPng.png")
// );
// const Template6BackPng = lazy(() =>
//   import("../../../assets/image/Template6BackPng.png")
// );

// const Template7FrontPng = lazy(() =>
//   import("../../../assets/image/Template7FrontPng.png")
// );
// const Template7BackPng = lazy(() =>
//   import("../../../assets/image/Template7BackPng.png")
// );

// const Template8FrontPng = lazy(() =>
//   import("../../../assets/image/Template8FrontPng.png")
// );
// const Template8BackPng = lazy(() =>
//   import("../../../assets/image/Template8BackPng.png")
// );

// const Template9FrontPng = lazy(() =>
//   import("../../../assets/image/Template9FrontPng.png")
// );
// const Template9BackPng = lazy(() =>
//   import("../../../assets/image/Template9BackPng.png")
// );

const templateList = [
  { front: Template1FrontPng, back: Template1BackPng },
  { front: Template2FrontPng, back: Template2BackPng },
  { front: Template3FrontPng, back: Template3BackPng },
  { front: Template4FrontPng, back: Template4BackPng },
  { front: Template5FrontPng, back: Template5BackPng },
  { front: Template6FrontPng, back: Template6BackPng },
  { front: Template7FrontPng, back: Template7BackPng },
  { front: Template8FrontPng, back: Template8BackPng },
  { front: Template9FrontPng, back: Template9BackPng },
];

const Finish = () => {
  const [templateNumber, setTemplateNumber] = useState(1);
  const changeTemplateNumber = (e) => {
    setTemplateNumber(e);
  };

  useEffect(() => {
    console.log(templateNumber);
  }, [templateNumber]);

  return (
    <FinishStyle>
      <div className="bar">
        <CustomSelect />
        <SelectTemplate
          templateList={templateList}
          changeTemplateNumber={changeTemplateNumber}
        />
      </div>
      <div className="main">
        <SwitchTemp templateNumber={templateNumber} />
      </div>
    </FinishStyle>
  );
};

export default Finish;
