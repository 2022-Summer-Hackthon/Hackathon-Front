import styled from "styled-components";

const SelectStyle = styled.div`
  padding-top: 27px;
  position: relative;

  .select {
    position: relative;

    margin: 0 auto;
    width: 490px;
    height: 56px;
    background: #ffffff;
    border: 1px solid #83a3ef;
    border-radius: 5px;

    margin-bottom: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #5c5c5c;

    img {
      width: 35px;

      position: absolute;
      left: 14px;
      top: 12px;
      transition: 0.2s;
    }

    .not {
      transition: 0.2s;
      transform: rotate(-90deg);
    }
  }

  ul {
    position: absolute;
    left: 32px;

    padding-top: 27px;
    padding-bottom: 37px;
    width: 490px;
    background: #ffffff;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);
    border-radius: 5px;

    li {
      list-style: none;
      margin: 0 auto;
      margin-top: 20px;
      width: 400px;
      height: 25px;

      text-align: center;

      border-bottom: 1px solid rgba(157, 157, 157, 1);
      cursor: pointer;
    }
  }
`;

export default SelectStyle;
