import React from "react";
import { Outlet } from "react-router-dom";
import Product from "../components/Product";

const Page = ({ clicked, onClicked }) => {
  return (
    <div>{clicked ? <Outlet /> : <Product onClicked={onClicked} />}</div>
  );
};

export default Page;
