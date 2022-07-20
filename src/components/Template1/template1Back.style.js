import styled from "styled-components";

const Template1BackStyle = styled.div`
  .normal-back {
    position: relative;
    width: 616px;
    height: 351px;
    background: white;
    color: black;
  }

  input {
    border: none;
    outline: none;
    width: auto;

    text-align: right;
  }

  .normal-school {
    position: absolute;
    top: 35px;
    right: 27px;
  }

  .normal-title1 {
    display: flex;
    align-items: flex-end;
    font-size: 40px;
    color: #9fccaf;
  }

  .normal-contents {
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

  .normal-career {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    /* identical to box height */
    color: #000000;
  }

  .normal-notion {
    position: absolute;
  }

  .normal-name {
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 26px;
    letter-spacing: 0.2em;

    color: #000000;
  }

  .normal-info {
    position: absolute;
    left: 29px;
    bottom: 17px;
  }

  .flex {
    display: flex;
    margin-bottom: 11px;
    position: relative;
    top: 5px;

    div {
      display: flex;
      align-items: flex-end;

      p {
        margin-left: 2px;
      }
    }
  }

  .normal-notion {
    display: flex;
    position: relative;
    top: 5px;
    span {
      margin-left: 10px;
    }
  }

  .call {
    margin-left: 19px;
  }

  .large-back {
    position: relative;
    width: 1050px;
    height: 598px;
    background: white;
    color: black;
  }

  .large-school {
    position: absolute;
    top: 55px;
    right: 57px;
  }

  .large-title1 {
    display: flex;
    width: 900px;
    align-items: flex-end;
    text-align: right;
    font-size: 70px;
    color: #9fccaf;
  }
  .large-title2 {
    position: absolute;
    right: -360px;
    display: flex;
    align-items: flex-end;
    position: relative;
    text-align: right;
    font-size: 35px;
    color: #9fccaf;
  }

  .large-contents {
    display: flex;
    align-items: center;
    color: black;

    position: absolute;
    left: 40px;
    bottom: 126px;

    padding-bottom: 10px;
    border-bottom: 1px solid rgba(159, 204, 175, 1);

    width: 569px;
  }

  .large-career {
    text-align: left;
    background: none;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 50px;
    color: #000000;
  }

  .large-name {
    position: absolute;
    left: 180px;
    text-align: left;
    background: none;
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 36px;
    letter-spacing: 0.2em;
    margin-left: 20px;
    color: #000000;
  }

  .large-info {
    position: absolute;
    left: 40px;
    bottom: 47px;

    font-size: 20px;
  }

  .flex {
    display: flex;
    margin-bottom: 11px;

    font-size: 27px;

    div {
      display: flex;
      align-items: center;

      p {
        margin-left: 10px;
      }
    }

    div + div {
      margin-left: 19px;
    }
  }
  .git {
    font-size: 27px;
  }
  .call {
    font-size: 27px;
  }

  span {
    margin-left: 10px;
  }
`;

export default Template1BackStyle;
