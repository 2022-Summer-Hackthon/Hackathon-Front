import styled from "styled-components";

const Template7Style = styled.div`
  .normal {
    width: 616px;
    height: 350px;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: #fff;
  }
  h1 {
    z-index: 999;

    color: #636363;
    .highlight {
      color: #e04a53;
    }
  }
  .normal-stick1 {
    position: absolute;
    left: 180px;

    width: 145px;
    height: 46px;
    background: #e7e7e7;
    border-radius: 90px;
    transform: rotate(-55deg);
  }
  .normal-stick2 {
    position: absolute;
    left: 240px;

    width: 145px;
    height: 46px;
    background: rgba(231, 231, 231, 0.61);
    border-radius: 90px;
    transform: rotate(55deg);
  }
  .normal-stick3 {
    position: absolute;
    left: 300px;
    width: 145px;
    height: 46px;
    background: #e7e7e7;
    border-radius: 90px;
    transform: rotate(-55deg);
  }
  footer {
    position: absolute;
    bottom: 0;
    width: 616px;
    height: 53px;
    background: #e04a53;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .normal-triangle {
    position: absolute;
    bottom: 40px;
    width: 0;
    height: 0;
    transform: rotate(-90deg);
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;
    border-left: 50px solid #e04a53;
  }

  /* ------------------------------------------------------ */
  .large {
    width: 989px;
    height: 597px;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: #fff;

    margin-bottom: 50px;
  }
  h1 {
    z-index: 999;
    font-size: 50px;
    color: #636363;
    .large-highlight {
      color: #e04a53;
    }
  }
  .large-stick1 {
    position: absolute;
    left: 300px;

    width: 205px;
    height: 66px;
    background: #e7e7e7;
    border-radius: 90px;
    transform: rotate(-55deg);
  }
  .large-stick2 {
    position: absolute;
    left: 380px;

    width: 205px;
    height: 66px;
    background: rgba(231, 231, 231, 0.61);
    border-radius: 90px;
    transform: rotate(55deg);
  }
  .large-stick3 {
    position: absolute;
    left: 460px;
    width: 205px;
    height: 66px;
    background: #e7e7e7;
    border-radius: 90px;
    transform: rotate(-55deg);
  }
  footer {
    position: absolute;
    bottom: 0;
    width: 989px;
    height: 103px;
    background: #e04a53;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .large-triangle {
    position: absolute;
    bottom: 90px;
    width: 0;
    height: 0;
    transform: rotate(-90deg);
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;
    border-left: 50px solid #e04a53;
  }
`;
export default Template7Style;
