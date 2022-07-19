import styled from "styled-components";

const Template2BackStyle = styled.div`
  .normal-back {
    /*뒷면*/
    width: 616px;
    height: 351px;

    position: relative;
    background-color: white;
    border: 1px solid black;
  }

  .normal-intro {
    /*묶은 div*/
    margin-left: 28px;
  }

  .normal-name {
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

  .normal-career {
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

  .normal-text {
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

  .normal-border-right {
    width: 4px;
    height: 96px;
    background-color: black;

    position: absolute;
    left: 250px;
    top: 114px;
  }

  .normal-border-line {
    width: 560px;
    height: 0px;
    position: absolute;
    left: 24px;
    bottom: 87px;
    border: 1px solid black;
  }

  .normal-call {
    position: absolute;
    left: 299px;
    top: 119px;
  }

  .normal-git {
    position: absolute;
    left: 299px;
    top: 153px;
  }

  .normal-adress {
    position: absolute;
    top: 186px;
    left: 299px;
  }
  /*mmmmmmmmmmmmmmmm*/
  .large-back {
    width: 1050px;
    height: 598px;

    position: relative;
    background-color: white;
    border: 1px solid black;
  }

  .large-intro {
    /*묶은 div*/
    margin-left: 50px;
  }

  .large-name {
    /*Kang SeongHun*/
    position: absolute;
    width: 500px;
    height: 28px;
    top: 140px;

    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 28px;
    /* identical to box height */

    letter-spacing: 0.05em;

    color: #000000;
  }

  .large-career {
    position: absolute;
    /*Developer*/

    top: 180px;
    width: 92px;
    height: 23px;

    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 23px;
    /* identical to box height */

    color: #797979;
  }

  .large-text {
    /*더 좋은 개발자*/
    position: absolute;
    width: 24 0px;
    height: 50px;
    top: 216px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 15px;
    letter-spacing: 0.05em;

    color: #797979;
  }

  .large-border-right {
    width: 4px;
    height: 195px;
    background-color: black;

    position: absolute;
    left: 430px;
    top: 114px;
  }

  .large-border-line {
    width: 1000px;
    height: 0px;

    position: absolute;
    left: 24px;
    bottom: 87px;
    border: 1px solid black;
  }

  .large-call {
    position: absolute;
    left: 500px;
    top: 120px;

    font-size: 20px;
  }

  .large-git {
    position: absolute;
    left: 500px;
    top: 200px;

    font-size: 20px;
  }

  .large-adress {
    position: absolute;
    top: 280px;
    left: 500px;

    font-size: 20px;
  }
`;

export default Template2BackStyle;
