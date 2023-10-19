import { Col, NavDropdown, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "./Button";
import '../styles/Header.css'

// Styles for the Back Button
const BackButtonStyles = {
  padding: "1.5% 8%",
  border: " 2px solid green",
  backgroundColor: "white",
  color: "green",
  fontSize: "14px",
  fontWeight: "bold",
  borderRadius: "20px",
};

// Styles for the Approve Button
const ApproveButtonStyles = {
  padding: "1.5% 8%",
  border: " 2px solid white",
  backgroundColor: "green",
  color: "white",
  fontSize: "14px",
  fontWeight: "bold",
  borderRadius: "20px",
};

function Header() {
  // Click event handler for the Back Button
  const handleBack = () => {
    console.log("Button was clicked!");
  };

  // Click event handler for the Approve Button
  const handleApprove = () => {
    console.log("Button was clicked!");
  };

  return (
    <>
      {/* Header div with background color and shadow */}
      <div style={{ backgroundColor: "white", boxShadow: '0px 0px 6px 0px rgba(0,0,0,0.52)' }}>
        <Container style={{ padding: '20px 0' }}>
          <Row>
            <Col>Order {`>`} Order 3245674</Col>
          </Row>
          <Row>
            <Col>
              <span className="order-num">Order 3245674</span>
            </Col>
            <Col className="btn-grp-container">
              {/* Back Button with the "handleBack" click event handler */}
              <Button onClick={handleBack} style={BackButtonStyles}>
                Back
              </Button>
              {/* Approve Button with the "handleApprove" click event handler */}
              <Button
                onClick={handleApprove}
                style={ApproveButtonStyles}
              >
                Approve
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Header;
