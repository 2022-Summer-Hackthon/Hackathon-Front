import styled from "styled-components";

const Template6BackStyle = styled.div`
  .normal {
    width: 616px;
    height: 350px;

    position: relative;
    display: flex;

    justify-content: space-between;
    background-color: #fff;
  }

  li {
    display: flex;
  }

  .normal-info {
    text-align: left;
  }

  .normal-infoTitle {
    width: 80px;
    height: 20px;
    margin: 0 20px 0 10px;
    font-weight: 600;
    font-size: 17px;
    text-align: right;
    letter-spacing: 0.025em;
    color: #1fa6b9;
  }

  .normal-nameDiv {
    margin: 0 0 5px 10px;
  }
  .normal-infoDiv {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
  }
  .normal-position {
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.02em;
    color: #22a6b8;
  }
  .normal-name {
    font-weight: 600;
    font-size: 31px;
    letter-spacing: 0.265em;
    color: #000000;
  }

  /*--------------------------------------------*/

  .large {
    width: 989px;
    height: 597px;
    position: relative;
    display: flex;

    justify-content: space-between;
    background-color: #fff;

    overflow: hidden;
  }
  li {
    display: flex;
  }

  .large-info {
    text-align: left;
  }

  .large-infoTitle {
    width: 80px;
    height: 20px;
    margin: 0 20px 0 10px;
    font-weight: 600;
    font-size: 20px;
    text-align: right;
    letter-spacing: 0.025em;
    color: #1fa6b9;
  }

  .large-nameDiv {
    margin: 0 0 50px 40px;
  }
  .large-infoDiv {
    margin: 30px 0 0 20px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
  }
  .large-position {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.02em;
    color: #22a6b8;
  }
  .large-name {
    font-weight: 600;
    font-size: 40px;
    letter-spacing: 0.265em;
    color: #000000;
  }
`;
export default Template6BackStyle;
