import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "../styles/Orderinfo.css";
import { Container } from "react-bootstrap";
import OrderHeaderData from "./OrderHeaderData";
import OrderListData from "./OrderListData";
// import { fetchOrders } from "../redux/slice/OrdersSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function OrderInfoContainer() {
  const state = useSelector((state) => state);

  return (
    <>
      {!state.orders.isLoading ? (
        <Container>
          <Row>
            <OrderHeaderData></OrderHeaderData>
          </Row>
          <Row>
            <OrderListData></OrderListData>
          </Row>
        </Container>
      ) : null}
    </>
  );
}

export default OrderInfoContainer;
