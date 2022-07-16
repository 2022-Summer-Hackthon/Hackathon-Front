import styled from "styled-components";

const MainStyle = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Nanum Gothic";
  font-style: normal;
  font-weight: 700;
  font-size: 28.75px;
  color: black;

  .card {
    position: relative;

    width: 1288px;
    height: 733px;

    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    background: #ffffff;

    display: flex;

    overflow: hidden;

    .left,
    .right {
      width: 50%;
      height: 100%;

      display: flex;
    }

    .left {
      flex-direction: column;
      justify-content: space-between;

      padding-left: 58px;
      padding-top: 67px;
      padding-bottom: 94px;

      .title {
        font-size: 45px;
      }

      .des {
        margin-top: 9px;
        font-size: 32px;
        color: rgba(125, 125, 125, 1);
      }

      .team-name {
        font-size: 28px;
      }
    }

    .right {
      padding-right: 119px;
      padding-bottom: 126px;

      align-items: flex-end;

      .input-container + .input-container {
        margin-top: 58px;
      }

      form {
        width: 481px;
        height: 210px;
        color: rgba(92, 92, 92, 1);

        input {
          width: 100%;
          border: none;
          border-bottom: 1px solid rgba(29, 29, 29, 1);

          outline: none;

          font-size: 25px;
        }
      }
    }

    .box-2 {
      width: 217px;
      height: 261.41px;

      background: #d9d9d9;

      transform: rotate(25deg);

      position: absolute;
      top: 0;
      right: -78px;
    }
    .box-1 {
      width: 272.12px;
      height: 146px;

      background: #ebebeb;

      transform: rotate(55deg);

      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

export default MainStyle;
