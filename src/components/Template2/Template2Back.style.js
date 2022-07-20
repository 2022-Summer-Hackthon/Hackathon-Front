import styled from "styled-components";

const Template2BackStyle = styled.div`
  .normal-back {
    /*뒷면*/
    width: 616px;
    height: 351px;

    position: relative;
    background-color: white;
  }

  .normal-intro {
    /*묶은 div*/
    margin-left: 28px;
  }

  input {
    display: block;
    border: none;
    outline: none;
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

    font-size: 20px;
    display: flex;
    align-items: center;
    input {
      margin-left: 10px;
      font-size: 20px;
    }
  }

  .normal-git {
    position: absolute;
    left: 299px;
    top: 153px;

    font-size: 20px;
    display: flex;
    align-items: center;
    input {
      margin-left: 10px;
      font-size: 20px;
    }
  }

  .normal-adress {
    position: absolute;
    top: 186px;
    left: 299px;

    font-size: 20px;
    display: flex;
    align-items: center;
    input {
      margin-left: 10px;
      font-size: 20px;
    }
  }
  /*mmmmmmmmmmmmmmmm*/
  .large-back {
    width: 1050px;
    height: 598px;

    position: relative;
    background-color: white;
  }

  .large-intro {
    /*묶은 div*/
    margin-left: 50px;
  }

  .large-name {
    /*Kang SeongHun*/
    position: absolute;
    width: 300px;
    height: 28px;
    top: 140px;

    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 20px;
    /* identical to box height */
    padding: 5px;

    letter-spacing: 0.05em;

    color: #000000;
  }

  .large-career {
    position: absolute;
    /*Developer*/

    top: 180px;
    width: 132px;
    height: 23px;

    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 33px;

    color: #797979;
  }

  .large-text {
    /*더 좋은 개발자*/
    position: absolute;
    width: 200px;
    height: 50px;
    top: 236px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 0.05em;

    color: #797979;
  }

  .large-border-right {
    width: 7px;
    height: 225px;
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
    bottom: 127px;
    border: 1px solid black;
  }

  .large-call {
    position: absolute;
    left: 480px;
    top: 120px;

    font-size: 30px;
    display: flex;
    align-items: center;

    input {
      margin-left: 10px;
      font-size: 30px;
    }
  }

  .large-git {
    position: absolute;
    left: 480px;
    top: 200px;

    font-size: 30px;

    display: flex;
    align-items: center;
    input {
      margin-left: 10px;
      font-size: 30px;
    }
  }

  .large-adress {
    position: absolute;
    top: 280px;
    left: 480px;

    font-size: 30px;
    display: flex;
    align-items: center;
    input {
      margin-left: 10px;
      font-size: 30px;
    }
  }
`;

export default Template2BackStyle;
