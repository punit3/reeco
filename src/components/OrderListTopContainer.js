import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import SearchBox from "./SearchBox";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

const ButtonStyles = {
  padding: "5% 8%",
  width: "10rem",
  border: " 2px solid green",
  backgroundColor: "white",
  color: "green",
  fontSize: "14px",
  fontWeight: "bold",
  borderRadius: "20px",
  marginRight: "2rem",
};

function OrderListTopContainer() {
  return (
    <>
      <Row className="order-details-container">
        <Col xs={3} md={3}>
          <span className="list-header">Product Name</span>
        </Col>
        <Col xs={1} md={2}>
          <span className="list-header">Brand</span>
        </Col>
        <Col xs={1} md={1}>
          <span className="list-header">Price</span>
        </Col>
        <Col xs={2} md={2}>
          <span className="list-header">Quantity</span>
        </Col>
        <Col xs={1} md={1}>
          <span className="list-header">Total</span>
        </Col>
        <Col xs={3} md={3}>
          <span className="list-header">Status</span>
        </Col>
      </Row>
    </>
  );
}

export default OrderListTopContainer;
