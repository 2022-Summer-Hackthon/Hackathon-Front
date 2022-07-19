import styled from "styled-components";

const Template9BackStyle = styled.div`
  .normal {
    width: 616px;
    height: 351px;

    background: #232527;
    border-radius: 3px;

    position: relative;
  }

  .large {
    width: 1050px;
    height: 598px;
    background: #232527;
    border-radius: 3px;

    position: relative;
  }

  div {
    color: white;
  }

  .normal-logo {
    position: absolute;
    top: 75px;
    left: 73px;

    .normal-title {
      font-weight: 800;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.025em;
      color: #ffffff;

      margin-top: 19px;
    }
  }
  .normal-stick {
    position: absolute;
    top: 0;
    left: 208px;

    width: 50px;
    height: 298px;
    background: #ffffff;
    border-radius: 0px 0px 30px 30px;
  }
  .normal-info {
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

  .large-logo {
    position: absolute;
    top: 75px;
    left: 100px;

    .large-title {
      font-weight: 800;
      font-size: 30px;
      line-height: 24px;
      letter-spacing: 0.025em;
      color: #ffffff;

      margin-top: 19px;
    }
  }
  .large-stick {
    position: absolute;
    top: 0;
    left: 358px;

    width: 70px;
    height: 508px;
    background: #ffffff;
    border-radius: 0px 0px 30px 30px;
  }
  .large-info {
    position: absolute;
    bottom: 259px;
    right: 250px;

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
        font-size: 39px;
        line-height: 35px;
        letter-spacing: 0.035em;
        color: #ffffff;

        margin-right: 19px;
      }
      .career {
        font-weight: 800;
        font-size: 24px;
        line-height: 19px;
        letter-spacing: 0.035em;
        color: #ffffff;
      }
    }
    .number,
    .email,
    .address,
    .url {
      font-weight: 800;
      font-size: 26px;
      line-height: 69px;
      letter-spacing: 0.025em;
      color: #ffffff;
    }
  }
`;

export default Template9BackStyle;
