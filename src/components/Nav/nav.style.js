import styled from "styled-components";

const NavStyle = styled.nav`
  width: 395px;
  height: 33px;

  position: absolute;
  top: 85px;
  right: 316px;

  font-size: 25px;
  font-weight: 700;

  ul,
  li {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    justify-content: space-between;

    li {
      gap: 2px;
      list-style: none;
      p {
        color: rgba(78, 78, 78, 0.53);
        text-decoration: none;
      }
    }

    .choose p {
      color: rgba(36, 36, 36, 1);
    }
    .choose li {
      border-bottom: 4px solid rgba(43, 43, 43, 1);
      padding-bottom: 8px;
    }
  }
`;

export default NavStyle;
