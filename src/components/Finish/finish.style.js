import styled from "styled-components";

const FinishStyle = styled.div`
  display: flex;
  position: relative;

  .bar {
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 555px;
    height: 100vh;
    background: white;
    overflow-y: scroll;
  }
  .main {
    margin-left: 555px;
    padding-top: 179px;
    padding-bottom: 179px;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: calc(100vw - 555px);
  }

  .save {
    position: fixed;
    top: 180px;
    right: 50px;

    width: 80px;
    height: 80px;

    border: 1px solid black;
    border-radius: 10px;

    background: white;

    :hover {
      background: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  }
  .qr {
    position: fixed;
    top: 280px;
    right: 50px;

    width: 80px;
    height: 80px;

    background: white;

    border: 1px solid black;
    border-radius: 10px;

    :hover {
      background: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  }
`;

export default FinishStyle;
