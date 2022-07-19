import styled from "styled-components";

const Template4BackStyle = styled.div`
  .normal {
    width: 616px;
    height: 351px;

    background: #ffffff;
    border-radius: 3px;

    position: relative;
  }

  .large {
    width: 1050px;
    height: 598px;
    background: #ffffff;
    border-radius: 3px;

    position: relative;
  }

  .normal-row-line {
    width: 100%;
    height: 2px;
    background-color: #242424;

    position: absolute;
    top: 251px;
  }
  .normal-column-line {
    width: 2px;
    height: 351px;
    background-color: #242424;

    position: absolute;
    top: 0;
    left: 308px;
  }
  .normal-personal {
    display: flex;
    align-items: flex-end;

    position: absolute;
    top: 222px;
    left: 50px;

    .normal-name {
      font-weight: 900;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: 0.25em;
      color: #101386;
    }
    .normal-career {
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.05em;
      color: #bababa;
    }
  }
  .normal-info-school {
    position: absolute;
    top: 27px;
    right: 40px;

    width: 232px;
    height: 68px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .normal-name-number {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .normal-title {
        font-weight: 900;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.05em;

        color: #101386;
      }
      .normal-number {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: -0.065em;
        color: #101386;

        span {
          color: black;
          font-weight: 400;
        }
      }
    }
    .normal-address {
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      letter-spacing: 0.05em;
      color: #383838;
    }
  }
  .normal-info-personal {
    position: absolute;
    right: 49px;
    bottom: 18px;
    .normal-mobile,
    .normal-email,
    .normal-github {
      display: flex;

      .normal-t {
        width: 55px;
        height: 19px;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.05em;
        color: #101386;
      }
      .normal-d {
        margin-left: 35px;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: -0.065em;
        color: #000000;
      }
    }
  }

  .large-row-line {
    width: 100%;
    height: 2px;
    background-color: #242424;

    position: absolute;
    top: 451px;
  }
  .large-column-line {
    width: 2px;
    height: 598px;
    background-color: #242424;

    position: absolute;
    top: 0;
    left: 508px;
  }
  .large-personal {
    display: flex;
    align-items: flex-end;

    position: absolute;
    top: 400px;
    left: 100px;

    .large-name {
      font-weight: 900;
      font-size: 45px;
      line-height: 29px;
      letter-spacing: 0.25em;
      color: #101386;
    }
    .large-career {
      font-weight: 700;
      font-size: 28px;
      line-height: 17px;
      letter-spacing: 0.05em;
      color: #bababa;
    }
  }
  .large-info-school {
    position: absolute;
    top: 57px;
    right: 70px;

    width: 302px;
    height: 68px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .large-name-number {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .large-title {
        font-weight: 900;
        font-size: 30px;
        line-height: 21px;
        letter-spacing: 0.05em;

        color: #101386;
      }
      .large-number {
        font-weight: 700;
        font-size: 25px;
        line-height: 38px;
        letter-spacing: -0.065em;
        color: #101386;

        span {
          color: black;
          font-weight: 400;
        }
      }
    }
    .large-address {
      font-weight: 500;
      font-size: 25px;
      line-height: 28px;
      letter-spacing: 0.05em;
      color: #383838;
    }
  }
  .large-info-personal {
    position: absolute;
    right: 79px;
    bottom: 28px;
    .large-mobile,
    .large-email,
    .large-github {
      display: flex;

      .large-t {
        width: 100px;
        height: 30px;
        font-weight: 700;
        font-size: 30px;
        line-height: 28px;
        letter-spacing: 0.05em;
        color: #101386;
      }
      .large-d {
        margin-left: 35px;
        font-weight: 400;
        font-size: 25px;
        line-height: 28px;
        letter-spacing: -0.065em;
        color: #000000;
      }
    }
  }
`;

export default Template4BackStyle;
