import React, { memo } from "react";
import Form from "./Form";
import MainStyle from "./main.style";

const Main = memo(() => {
  return (
    <MainStyle>
      <div className="card">
        <div className="left">
          <div>
            <h1 className="title">명함 제작 서비스</h1>
            <h2 className="des">간편한 명함 만들기</h2>
          </div>
          <div className="team-name">Our team name</div>
        </div>
        <div className="right">
          <Form />
        </div>
        <div className="box-1"></div>
        <div className="box-2"></div>
      </div>
    </MainStyle>
  );
});

export default Main;
