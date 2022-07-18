import React, { useCallback } from "react";
import { useState } from "react";
import SelectStyle from "./select.style";
import toggle from "../../../assets/image/toggle.png";

const CustomSelect = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("원하는 키워드를 입력해주세요");

  const clickBox = useCallback(() => {
    setShow((prev) => !prev);
  }, []);

  const changeValue = useCallback((e) => {
    setValue(e);
    setShow(false);
  }, []);

  return (
    <SelectStyle>
      <div className="select" onClick={clickBox}>
        <img src={toggle} alt="toggle" className={show ? "" : "not"} />
        {value}
      </div>
      {show && (
        <ul>
          <li onClick={() => changeValue("심플")}>심플</li>
          <li onClick={() => changeValue("모던")}>모던</li>
          <li onClick={() => changeValue("큐티")}>큐티</li>
          <li onClick={() => changeValue("빈티지")}>빈티지</li>
          <li onClick={() => changeValue("유니크")}>유니크</li>
          <li onClick={() => changeValue("키워드")}>키워드</li>
        </ul>
      )}
    </SelectStyle>
  );
};

export default CustomSelect;
