import styled from "styled-components";

const Template5Style = styled.div`
  .nomal {
    width: 616px;
    height: 351px;
    background: rgba(121, 118, 113, 1);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .large {
    width: 1050px;
    height: 598px;
    background: rgba(121, 118, 113, 1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nomal-logo {
    width: 233px;
    height: 103px;

    position: relative;

    .nomal-circle {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: white;

      display: flex;
      justify-content: center;
      align-items: center;

      font-weight: 600;
      font-size: 31px;
      color: #797671;

      position: absolute;
    }

    .nomal-circle:nth-child(1) {
      top: 0;
      left: 0;
    }
    .nomal-circle:nth-child(2) {
      bottom: 9px;
      left: 57px;
    }
    .nomal-circle:nth-child(3) {
      top: 6px;
      left: 117px;
    }
    .nomal-circle:nth-child(4) {
      bottom: 0;
      right: 0;
    }
  }

  .large-logo {
    width: 270px;
    height: 133px;

    position: relative;

    .large-circle {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: white;

      display: flex;
      justify-content: center;
      align-items: center;

      font-weight: 600;
      font-size: 31px;
      color: #797671;

      position: absolute;
    }

    .large-circle:nth-child(1) {
      top: 0;
      left: 0;
    }
    .large-circle:nth-child(2) {
      bottom: 9px;
      left: 64px;
    }
    .large-circle:nth-child(3) {
      top: 6px;
      left: 127px;
    }
    .large-circle:nth-child(4) {
      bottom: 0;
      right: 0;
    }
  }
`;

export default Template5Style;
