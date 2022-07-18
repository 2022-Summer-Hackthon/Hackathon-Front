import styled from "styled-components";

const Template9BackStyle = styled.div`
  width: 616px;
  height: 351px;

  background: #232527;
  border-radius: 3px;

  position: relative;

  div {
    color: white;
  }

  .nomal-logo {
    position: absolute;
    top: 75px;
    left: 73px;

    .nomal-title {
      font-weight: 800;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.025em;
      color: #ffffff;

      margin-top: 19px;
    }
  }
  .nomal-stick {
    position: absolute;
    top: 0;
    left: 208px;

    width: 50px;
    height: 298px;
    background: #ffffff;
    border-radius: 0px 0px 30px 30px;
  }
  .nomal-info {
    position: absolute;
    bottom: 59px;
    right: 67px;

    width: 271px;
    height: 219px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .personal {
      display: flex;
      align-items: flex-end;

      .name {
        font-weight: 800;
        font-size: 29px;
        line-height: 35px;
        letter-spacing: 0.025em;
        color: #ffffff;

        margin-right: 9px;
      }
      .career {
        font-weight: 800;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.025em;
        color: #ffffff;
      }
    }
    .number,
    .email,
    .address,
    .url {
      font-weight: 800;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.025em;
      color: #ffffff;
    }
  }
`;

export default Template9BackStyle;
