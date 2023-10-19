import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <>
      {/* Navbar component with a custom class "bg-body-tertiary" */}
      <Navbar className="bg-body-tertiary">
        {/* Container to wrap the contents of the Navbar */}
        <Container>
          {/* Brand/logo/link */}
          <Navbar.Brand >Reeco</Navbar.Brand>
          
          {/* Navigation links*/}
          <Nav className="me-auto">
            <Nav.Link href="#home">Store</Nav.Link>
            <Nav.Link href="#features">Order</Nav.Link>
            <Nav.Link href="#pricing">Analytics</Nav.Link>
          </Nav>

          {/* Navbar toggle button for mobile */}
          <Navbar.Toggle />
          
          {/* Navbar content on the right */}
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {/* FontAwesome icon for a shopping cart */}
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "#ffffff", marginRight: "20px" }}
              />
            </Navbar.Text>
          </Navbar.Collapse>

          {/* Dropdown menu */}
          <NavDropdown title="Hello, James" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Orders</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
