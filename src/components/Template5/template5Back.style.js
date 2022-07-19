import styled from "styled-components";

const Template5BackStyle = styled.div`
  .normal {
    width: 616px;
    height: 351px;
    background: #ffffff;
    padding-left: 26px;
    padding-top: 29px;
    position: relative;
  }
  .large {
    width: 1050px;
    height: 598px;
    background: #ffffff;
    padding-left: 26px;
    padding-top: 29px;
    position: relative;
  }

  .normal-rogo {
    width: 243px;
    height: 103px;

    position: relative;

    .normal-circle {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: rgba(121, 118, 113, 1);

      display: flex;
      justify-content: center;
      align-items: center;

      font-weight: 600;
      font-size: 31px;
      color: white;

      position: absolute;
    }

    .normal-circle:nth-child(1) {
      top: 0;
      left: 0;
    }
    .normal-circle:nth-child(2) {
      bottom: 9px;
      left: 57px;
    }
    .normal-circle:nth-child(3) {
      top: 6px;
      left: 117px;
    }
    .normal-circle:nth-child(4) {
      bottom: 0;
      right: 0;
    }
  }

  .normal-info {
    position: absolute;
    bottom: 30px;
    right: 27px;

    width: 260px;
    height: 144px;

    .normal-important {
      display: flex;
      align-items: flex-end;

      .normal-name {
        font-weight: 600;
        font-size: 31px;
        line-height: 37px;
        letter-spacing: 0.19em;
      }
      .normal-career {
        margin-left: 16px;
        font-weight: 600;
        font-size: 17px;
        line-height: 20px;
        color: rgba(121, 118, 113, 0.6);
      }
    }
    .normal-other {
      margin-top: 19px;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: #797671;

      span {
        margin-left: 11px;
        color: rgba(121, 118, 113, 0.6);
      }
    }
  }

  .large-rogo {
    width: 333px;
    height: 153px;

    position: relative;

    .large-circle {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: rgba(121, 118, 113, 1);

      display: flex;
      justify-content: center;
      align-items: center;

      font-weight: 600;
      font-size: 31px;
      color: white;

      position: absolute;
    }

    .large-circle:nth-child(1) {
      top: 0;
      left: 0;
    }
    .large-circle:nth-child(2) {
      bottom: 9px;
      left: 77px;
    }
    .large-circle:nth-child(3) {
      top: 6px;
      left: 157px;
    }
    .large-circle:nth-child(4) {
      bottom: 0;
      right: 0;
    }
  }

  .large-info {
    position: absolute;
    bottom: 30px;
    right: 27px;

    width: 350px;
    height: 204px;

    .large-important {
      display: flex;
      align-items: flex-end;

      .large-name {
        font-weight: 600;
        font-size: 40px;
        line-height: 37px;
        letter-spacing: 0.19em;
      }
      .career {
        margin-left: 16px;
        font-weight: 600;
        font-size: 25px;
        line-height: 20px;
        color: rgba(121, 118, 113, 0.6);
      }
    }
    .large-other {
      margin-top: 19px;
      font-weight: 600;
      font-size: 27px;
      line-height: 50px;
      color: #797671;

      span {
        margin-left: 11px;
        color: rgba(121, 118, 113, 0.6);
      }
    }
  }
`;

export default Template5BackStyle;
