import styled from "styled-components";

const Template6FrontStyle = styled.div`
  .normal {
    width: 616px;
    height: 350px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-color: #fff;
  }
  .normal-logoDiv {
    display: flex;
  }
  p {
    position: absolute;
    bottom: 5px;
    left: 70px;
    display: inline-block;
    font-weight: 700;
    font-size: 27px;
    color: #8e909b;
  }
  .normal-highlightD {
    margin-left: 10px;
    font-weight: 800;
    font-size: 40px;
    color: #21a5b3;
  }
  .normal-highlightG {
    position: absolute;
    bottom: 10px;
    font-weight: 800;
    font-size: 40px;
    color: #8ed6e5;
  }

  /*------------------------------------------*/

  .large {
    width: 989px;
    height: 597px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-color: #fff;
    overflow: hidden;

    margin-bottom: 50px;
  }
  .large-logoDiv {
    display: flex;
  }
  p {
    position: absolute;
    bottom: 20px;
    left: 150px;
    display: inline-block;
    font-weight: 700;
    font-size: 54px;
    color: #8e909b;
  }
  .large-highlightD {
    margin-left: 40px;
    font-weight: 800;
    font-size: 80px;
    color: #21a5b3;
  }
  .large-highlightG {
    position: absolute;
    bottom: 40px;
    font-weight: 800;
    font-size: 80px;
    color: #8ed6e5;
  }
`;
export default Template6FrontStyle;
