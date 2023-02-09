import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Details = () => {
  const { productId } = useParams();
  return (
    <Container>
      <p>
        {" "}
        Product Datails pages <br />
        Product Name {productId}{" "}
      </p>
    </Container>
  );
};

export default Details;
const Container = styled.div`
  font-size: 20px;
  width: 600px;
  background-color: #fff;
  margin: 0 auto;
  font-weight: 500;
  height: 250px;
  text-align: left;
  position: relative;
  top: 10px;
`;
