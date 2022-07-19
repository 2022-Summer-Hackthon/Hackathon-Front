import React, { memo, useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "./Input";

const Form = memo(() => {
  const [github, setGihub] = useState("");
  const [facebook, setFacebook] = useState("");
  const [velog, setVelog] = useState("");

  const navigate = useNavigate();
  const onChangeGihub = useCallback((e) => {
    setGihub(e.target.value);
  }, []);

  const onChangeFacebook = useCallback((e) => {
    setFacebook(e.target.value);
  }, []);

  const onChangeVelog = useCallback((e) => {
    setVelog(e.target.value);
  }, []);

  const sendInfo = (e) => {
    console.log(1);
    e.preventDefault();
    navigate("/finish");
    // url 검사
    // 서버 요청
  };

  return (
    <form onSubmit={sendInfo}>
      <Input name="velog" value={velog} change={onChangeVelog} />
      <Input name="Facebook" value={facebook} change={onChangeFacebook} />
      <Input name="깃허브" value={github} change={onChangeGihub} />
      <button type="hidden" title="submit"></button>
    </form>
  );
});

export default Form;
