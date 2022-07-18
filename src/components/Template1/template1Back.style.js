import styled from "styled-components";

const Template1BackStyle = styled.div`
  .back {
    position: relative;
    width: 616px;
    height: 351px;
    background: white;
    color: black;
  }

  .school {
    position: absolute;
    top: 35px;
    right: 27px;
  }

  .title1 {
    display: flex;
    align-items: flex-end;

    color: #9fccaf;
  }

  .contents {
    display: flex;
    align-items: center;
    color: black;

    position: absolute;
    left: 24px;
    bottom: 76px;

    padding-bottom: 10px;
    border-bottom: 1px solid rgba(159, 204, 175, 1);

    width: 569px;
  }

  .career {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    /* identical to box height */
    color: #000000;
  }

  .name {
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 26px;
    letter-spacing: 0.2em;

    color: #000000;
  }

  .info {
    position: absolute;
    left: 29px;
    bottom: 17px;
  }

  .flex {
    display: flex;
    margin-bottom: 11px;
  }

  .call {
    margin-left: 19px;
  }
`;

export default Template1BackStyle;
