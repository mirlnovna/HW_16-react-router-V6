import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const products = [
  {
    title: "Product Name 1",
    id: 1,
  },
  {
    title: "Product  Name  2",
    id: 2,
  },
];

const Product = ({ onClicked }) => {
  return (
    <List>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <h2> {item.title}</h2>
            <p>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "white" : "",
                  textDecoration: "none",
                })}
                onClick={onClicked}
                to={`${item.id}`}
              >
                <p className="detils">Details</p>
              </NavLink>
            </p>
          </li>
        ))}
      </ul>
    </List>
  );
};

export default Product;

const List = styled.ul`
  & ul {
    display: grid;
    justify-content: center;
    gap: 25px;
  }
  & h2 {
    font-weight: 400;
  }
  & li {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    background-color: #fff;
    padding: 15px 0;
    border-radius: 10px;
    width: 600px;
    position: relative;
    top: 40px;
  }
  & p {
    padding: 7px 10px;
    text-decoration: none;
    background-color: rgb(25, 174, 159);
    border-radius: 40px;
    & .detils {
      width: 130px;
      color: white;
      height: 40px;
      font-size: 1.4rem;
    }
  }
`;
