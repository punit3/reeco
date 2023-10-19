import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function OrderHeaderData() {
  // Retrieve the order data from the Redux store using useSelector
  const state = useSelector((state) =>
    state.orders.data[0] ? state.orders.data[0] : []
  );

  // Use state to manage the order data
  const [order, setOrder] = useState(state);

  // Update the order data when the Redux state changes
  useEffect(() => {
    setOrder(state);
  }, [state]);

  return (
    <>
      {/* Container for the header */}
      <Container className="container-header">
        <Row>
          {/* Supplier information */}
          <Col className="border-rt">
            <div className="header-title">Supplier</div>
            <div className="header-data">{order.category}</div>
          </Col>
          {/* Shipping date */}
          <Col className="border-rt">
            <div className="header-title">Shipping Date</div>
            <div className="header-data">{order.shipping_date}</div>
          </Col>
          {/* Total */}
          <Col className="border-rt">
            <div className="header-title">Total</div>
            <div className="header-data">$ {order.total}</div>
          </Col>
          {/* Category */}
          <Col className="border-rt">
            <div className="header-title">Category</div>
            <div className="header-data">{order.category}</div>
          </Col>
          {/* Department */}
          <Col className="border-rt">
            <div className="header-title">Department</div>
            <div className="header-data">{order.department}</div>
          </Col>
          {/* Status */}
          <Col>
            <div className="header-title">Status</div>
            <div className="header-data">{order.status}</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default OrderHeaderData;
