import styled from "styled-components";

const Template9FrontStyle = styled.div`
  .normal {
    width: 616px;
    height: 351px;

    background: #232527;
    border-radius: 3px;

    position: relative;

    svg {
      position: absolute;
      top: 145px;
      left: 279px;
    }
  }

  .large {
    width: 1050px;
    height: 598px;
    background: #232527;
    border-radius: 3px;

    position: relative;

    margin-bottom: 50px;

    svg {
      position: absolute;
      top: 250px;
      left: 480px;
    }
  }

  .normal-title {
    position: absolute;
    left: 279px;
    bottom: 109px;

    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.025em;
    color: #ffffff;
  }

  .large-title {
    position: absolute;
    left: 480px;
    bottom: 209px;

    font-weight: 800;
    font-size: 30px;
    line-height: 24px;
    letter-spacing: 0.025em;
    color: #ffffff;
  }
`;

export default Template9FrontStyle;
