import React, { memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import axios from "axios";
import ipconfig from "../../config/ipconfig.json";

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

  const sendInfo = async (e) => {
    e.preventDefault();
    const data = await axios.post(`${ipconfig.url}/draft/`, {
      custom_url: facebook,
      github_url: github,
    });
    localStorage.setItem("draft_id", data.data.draft_id);
    navigate("/finish");
  };

  return (
    <form onSubmit={sendInfo}>
      <Input name="velog" value={velog} change={onChangeVelog} />
      <Input name="url" value={facebook} change={onChangeFacebook} />
      <Input name="깃허브" value={github} change={onChangeGihub} />
      <button type="hidden" title="submit"></button>
    </form>
  );
});

export default Form;
