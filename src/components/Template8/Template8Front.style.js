import styled from "styled-components";

const Template8FrontStyle = styled.div`
  .normal {
    width: 616px;
    height: 350px;

    position: relative;
    display: flex;
    align-items: flex-end;

    background-color: #fff;
  }
  .normal-infoDiv {
    z-index: 999;
    width: 615px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  span {
    color: #fff;
    margin: 0px 10px 0 10px;
  }

  .normal-img {
    position: absolute;
    width: 616px;
    height: 350px;
  }
  /* --------------------------- */
  .large {
    width: 989px;
    height: 597px;

    position: relative;
    display: flex;
    align-items: flex-end;

    background-color: #fff;
  }
  .large-infoDiv {
    z-index: 999;
    width: 989px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  span {
    color: #fff;
    font-size: 20px;
    margin: 0px 30px 0 30px;
  }

  .large-img {
    position: absolute;
    width: 989px;
    height: 597px;
  }
`;
export default Template8FrontStyle;
