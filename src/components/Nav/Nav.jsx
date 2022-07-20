import React, { lazy, memo } from "react";
import { NavLink } from "react-router-dom";
import NavStyle from "./nav.style";

const Make = lazy(() => import("../../assets/image/Make"));
const Time = lazy(() => import("../../assets/image/Time"));
const Price = lazy(() => import("../../assets/image/Price"));

const Nav = memo(() => {
  return (
    <NavStyle>
      <ul>
        <NavLink
          to="/"
          style={{ textDecoration: "none" }}
          className={({ isActive }) => (isActive ? "choose" : "")}
        >
          <li>
            <Make />
            <p>제작</p>
          </li>
        </NavLink>
        <NavLink
          to="/collection"
          style={{ textDecoration: "none" }}
          className={({ isActive }) => (isActive ? "choose" : "")}
        >
          <li>
            <Time />
            <p>컬렉션</p>
          </li>
        </NavLink>
        <a
          href="https://github.com/2022-Summer-Hackthon/Hackathon"
          target="_blank"
          style={{ textDecoration: "none" }}
          className={({ isActive }) => (isActive ? "choose" : "")}
        >
          <li>
            <Price />
            <p>소개</p>
          </li>
        </a>
      </ul>
    </NavStyle>
  );
});

export default Nav;
