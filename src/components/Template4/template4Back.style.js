import styled from "styled-components";

const Template4BackStyle = styled.div`
  width: 616px;
  height: 351px;

  background: #ffffff;
  border-radius: 3px;

  position: relative;

  .row-line {
    width: 100%;
    height: 2px;
    background-color: #242424;

    position: absolute;
    top: 251px;
  }
  .column-line {
    width: 2px;
    height: 351px;
    background-color: #242424;

    position: absolute;
    top: 0;
    left: 308px;
  }
  .personal {
    display: flex;
    align-items: flex-end;

    position: absolute;
    top: 222px;
    left: 50px;

    .name {
      font-weight: 900;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: 0.25em;
      color: #101386;
    }
    .career {
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.05em;
      color: #bababa;
    }
  }
  .info-school {
    position: absolute;
    top: 27px;
    right: 40px;

    width: 232px;
    height: 68px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .name-number {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title {
        font-weight: 900;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.05em;

        color: #101386;
      }
      .number {
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
    .address {
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      letter-spacing: 0.05em;
      color: #383838;
    }
  }
  .info-personal {
    position: absolute;
    right: 49px;
    bottom: 18px;
    .mobile,
    .email,
    .github {
      display: flex;

      .t {
        width: 55px;
        height: 19px;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.05em;
        color: #101386;
      }
      .d {
        margin-left: 35px;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: -0.065em;
        color: #000000;
      }
    }
  }
`;

export default Template4BackStyle;
