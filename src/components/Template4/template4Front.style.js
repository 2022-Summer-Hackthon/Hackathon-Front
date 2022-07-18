import styled from "styled-components";

const Template4FrontStyle = styled.div`
  width: 616px;
  height: 351px;
  background: #ffffff;
  border-radius: 3px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  .nomal-line {
    width: 100%;
    height: 2px;
    background: #242424;

    position: absolute;
    top: 180px;
  }

  .nomal-title {
    text-align: center;
    width: 122px;
    height: 29px;
    background-color: white;

    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    color: #101386;

    position: relative;
    top: 10px;
  }
  .nomal-url {
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.05em;
    color: #000000;

    position: relative;
    top: 10px;
  }
`;

export default Template4FrontStyle;
