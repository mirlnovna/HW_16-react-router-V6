import React from "react";
import styled from "styled-components";

const MyOrders = () => {
  return (
    <Container>
      {" "}
      <h3>My Orders</h3>
    </Container>
  );
};

export default MyOrders;
const Container = styled.div`
  font-size: 20px;
  width: 600px;
  background-color: #fff;
  margin: 0 auto;
  height: 250px;
  text-align: left;
  position: relative;
  top: 10px;
`;
