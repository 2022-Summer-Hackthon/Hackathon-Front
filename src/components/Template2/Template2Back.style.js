import styled from "styled-components";

const Template2BackStyle = styled.div`
  .back {
    /*뒷면*/
    width: 616px;
    height: 351px;

    position: relative;
    background-color: white;
    border: 1px solid black;
  }

  .intro {
    /*묶은 div*/
    margin-left: 28px;
  }

  .name {
    /*Kang SeongHun*/
    position: absolute;
    width: 222px;
    height: 28px;
    top: 114px;

    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    /* identical to box height */

    letter-spacing: 0.05em;

    color: #000000;
  }

  .career {
    position: absolute;
    /*Developer*/

    top: 144px;
    width: 92px;
    height: 23px;

    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    /* identical to box height */

    color: #797979;
  }

  .text {
    /*더 좋은 개발자*/
    position: absolute;
    width: 170px;
    height: 30px;
    top: 180px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.05em;

    color: #797979;
  }

  .border-right {
    width: 4px;
    height: 96px;
    background-color: black;

    position: absolute;
    left: 250px;
    top: 114px;
  }

  .border-line {
    width: 569px;
    height: 0px;

    position: absolute;
    left: 24px;
    bottom: 87px;
    border: 1px solid black;
  }

  .call {
    position: absolute;
    left: 299px;
    top: 119px;
  }

  .git {
    position: absolute;
    left: 299px;
    top: 153px;
  }

  .adress {
    position: absolute;
    top: 186px;
    left: 299px;
  }
`;

export default Template2BackStyle;
