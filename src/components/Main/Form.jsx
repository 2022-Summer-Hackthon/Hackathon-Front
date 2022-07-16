import React, { memo, useCallback, useState } from "react";
import Input from "./Input";

const Form = memo(() => {
  const [github, setGihub] = useState("");
  const [sns, setSns] = useState("");

  const onChangeGihub = useCallback((e) => {
    setGihub(e.target.value);
  }, []);

  const onChangeSns = useCallback((e) => {
    setSns(e.target.value);
  }, []);

  const sendInfo = (e) => {
    e.preventDefault();

    // url 검사
    // 서버 요청
  };

  return (
    <form onSubmit={sendInfo}>
      <Input name="SNS" value={sns} change={onChangeSns} />
      <Input name="깃허브" value={github} change={onChangeGihub} />
      <button>보내기</button>
    </form>
  );
});

export default Form;
