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
`;

export default FinishStyle;
