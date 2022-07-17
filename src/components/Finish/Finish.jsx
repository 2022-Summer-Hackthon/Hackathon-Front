import React from "react";
import CustomSelect from "../common/Select/CustomSelect";
import FinishStyle from "./finish.style";

const Finish = () => {
  return (
    <FinishStyle>
      <div className="bar">
        <CustomSelect />
      </div>
      <div className="main"></div>
    </FinishStyle>
  );
};

export default Finish;
