import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = ({ setVisible }) => {
  const navigate = useNavigate();
  return (
    <>
      <Logo>
        <li className="Logo">LOGO</li>
      </Logo>
      <Headers>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#000" : "#fff",
              textDecoration: "none",
            })}
            to="/product"
          >
            {" "}
            Product
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#000" : "#fff",
              textDecoration: "none",
            })}
            to="/myCart"
          >
            My Cart
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#000" : "#fff",
              textDecoration: "none",
            })}
            to="/myOders"
          >
            My Orders
          </NavLink>{" "}
        </li>
        <button onClick={() => navigate(-1) || setVisible(false)}>
          Go back
        </button>
      </Headers>
    </>
  );
};

export default Header;
const Headers = styled.ul`
  width: 100%;
  height: 100px;
  background-color: rgb(44, 136, 217);
  display: flex;
  gap: 100px;
  list-style: none;
  margin-top: -30px;
  & li {
    position: relative;
    left: 800px;
    top: 27px;
    font-size: 1.5rem;
    color: white;
    text-decoration: none;
    font-weight: 100;
    cursor: pointer;
  }
  & button {
    width: 140px;
    height: 50px;
    background-color: rgb(25, 174, 159);
    border: none;
    border-radius: 40px;
    font-size: 1.2rem;
    cursor: pointer;
    color: white;
    position: relative;
    top: 370px;
    left: -190px;
  }
`;
const Logo = styled.p`
  list-style: none;
  font-size: 1.5rem;
  color: white;
  font-weight: 500;
  position: relative;
  left: -480px;
  top: 28px;
`;
