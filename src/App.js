import Container from "react-bootstrap/Container";

import Navigation from "./components/Navbar";
import Header from "./components/Header";
import OrderInfoContainer from "./components/OrderInfoContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, React, useRef } from "react";
import { fetchOrders } from "./redux/slice/OrdersSlice";

const ContainerExample = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <>
      <Container fluid style={{ backgroundColor: "#f4f4f4", padding: 0 }}>
        <Navigation />
        <Header />
        <OrderInfoContainer />
      </Container>
    </>
  );
};

export default ContainerExample;
