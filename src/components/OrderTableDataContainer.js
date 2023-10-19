import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { data } from "../Data";
import { Badge, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Popup from "./Popup.js";
import Button from "./Button";

// Styles for the "Approve" button
const ApproveButtonStyles = {
  padding: "1.8% 8%",
  border: " 2px solid white",
  backgroundColor: "green",
  color: "white",
  fontSize: "14px",
  fontWeight: "bold",
  borderRadius: "20px",
};

// Styles for the edit popup heading
const editPopupHeadingStyles = {
  marginBottom: "2px",
  fontSize: "14px",
  fontWeight: "600",
  color: " #4d4d4d",
  fontFamily: "sans-serif",
};

// Styles for the "Back" button
const BackButtonStyles = {
  padding: "1.5% 8%",
  border: " 2px solid green",
  backgroundColor: "white",
  color: "green",
  fontSize: "14px",
  fontWeight: "bold",
  borderRadius: "20px",
};

function OrderTableDataContainer(dataProps) {
  // State to manage the list of orders
  const [ordersList, updateOrderList] = useState(dataProps.data);

  // State to control the display of the "Missing Product" popup
  const [taskShow, setShow] = useState(false);

  // State to control the display of the edit popup
  const [editShow, setEdit] = useState(false);

  // State to store the current order being edited
  const [currentOrder, setCurrentorder] = useState("");

  // useEffect to update the order list when dataProps.data changes
  useEffect(() => {
    updateOrderList(dataProps.data);
  }, [dataProps.data]);

  // Function to display a badge based on the order status
  const handleStatus = (param) => {
    switch (param) {
      case "approved":
        return (
          <Badge bsPrefix="badge-style" bg="success">
            Approved
          </Badge>
        );
      case "urgent":
        return (
          <Badge bsPrefix="badge-style" bg="danger">
            Missing-Urgent
          </Badge>
        );
      case "missing":
        return (
          <Badge bsPrefix="badge-style" bg="warning">
            Missing
          </Badge>
        );
      default:
        return "";
    }
  };

  // Function to handle missing product status
  const handleMissingProduct = (data, value) => {
    dataProps.setOrderList(data, value);
    setShow(false);
  };

  // Function to handle updates in the edit popup
  const handleUpdate = (value) => {
    if (value === "update") dataProps.updateEditedOrder(currentOrder);
    setEdit(false);
  };

  return (
    <>
      {/* Popup for "Missing Product" */}
      <Popup
        show={taskShow}
        handleClose={() => setShow(false)}
        handleShow={() => setShow(true)}
        modalTitle="Missing Product"
      >
        <div style={{ ...editPopupHeadingStyles, ...{ marginBottom: "5%" } }}>
          Is {currentOrder.name}{" "}
          <strong style={{ color: "#df3131" }}>urgent</strong>?
        </div>
        <Button
          onClick={(event) => handleMissingProduct(currentOrder, "missing")}
          style={BackButtonStyles}
        >
          No
        </Button>
        <Button
          onClick={(event) => handleMissingProduct(currentOrder, "urgent")}
          style={{ ...ApproveButtonStyles, ...{ float: "right" } }}
        >
          Yes
        </Button>
      </Popup>

      {/* Popup for editing an order */}
      <Popup
        show={editShow}
        handleClose={() => setEdit(false)}
        handleShow={() => setEdit(true)}
      >
        <div style={editPopupHeadingStyles}>{currentOrder.name}</div>
        <div
          style={{
            ...editPopupHeadingStyles,
            ...{ fontSize: "12px", color: "grey" },
          }}
        >
          {currentOrder.brand}
        </div>
        {/* Form controls for editing */}
        <Row style={{ margin: "10px 0px" }}>
          <Col xs={1} md={3}>
            <img style={{ width: "100%" }} src={currentOrder.img}></img>
          </Col>
          <Col xs={1} md={3}>
            <label className="edit-popup-labels">Price</label>
            <label className="edit-popup-labels">Quantity</label>
            <label className="edit-popup-labels">Total</label>
          </Col>
          <Col xs={1} md={6}>
            <Form.Control
              bsPrefix="edit-popup-input"
              size="sm"
              type="text"
              placeholder="Small text"
              onChange={({ target }) =>
                setCurrentorder((state) => ({ ...state, price: target.value }))
              }
              value={currentOrder.price}
            />
            <Form.Control
              bsPrefix="edit-popup-input"
              size="sm"
              type="text"
              placeholder="Small text"
              onChange={({ target }) =>
                setCurrentorder((state) => ({
                  ...state,
                  quantity: target.value,
                }))
              }
              value={currentOrder.quantity}
            />
            <Form.Control
              bsPrefix="edit-popup-input"
              size="sm"
              type="text"
              placeholder="Small text"
              value={currentOrder.total}
            />
          </Col>
        </Row>
        <Row style={{ margin: "10px 0px" }}>
          <Col>
            <span className="edit-reasons">Missing product</span>
            <span className="edit-reasons">Quantity is not same</span>
            <span className="edit-reasons">Price is not same</span>
          </Col>
        </Row>
        <Row style={{ margin: "10px 0px" }}>
          <Col>
            <Button
              onClick={(event) => handleUpdate("cancel")}
              style={BackButtonStyles}
            >
              Cancel
            </Button>
            <Button
              onClick={(event) => handleUpdate("update")}
              style={{ ...ApproveButtonStyles, ...{ float: "right" } }}
            >
              Send
            </Button>
          </Col>
        </Row>
      </Popup>

      {/* Mapping through and rendering order items */}
      {ordersList &&
        ordersList.map((value, id) => {
          return (
            <Row
              key={id}
              style={{
                padding: "20px 4px",
                borderBottom: "1px solid #e7e7e7",
                color: " #6d6d6d",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "Poppins",
              }}
            >
              <Col
                xs={3}
                md={3}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Row>
                  <Col
                    xs={2}
                    md={2}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img
                      style={{ width: "40px", paddingRight: "4%" }}
                      src={value.img}
                      alt={value.name}
                    ></img>
                  </Col>
                  <Col xs={10} md={10}>
                    <span>{value.name}</span>
                  </Col>
                </Row>
              </Col>
              <Col
                xs={1}
                md={2}
                style={{ display: "flex", alignItems: "center" }}
              >
                <span>{value.brand}</span>
              </Col>
              <Col
                xs={1}
                md={1}
                style={{ display: "flex", alignItems: "center" }}
              >
                <span>{value.price}</span>
              </Col>
              <Col
                xs={2}
                md={2}
                style={{ display: "flex", alignItems: "center" }}
              >
                <span>{value.quantity}</span>
              </Col>
              <Col
                xs={1}
                md={1}
                style={{ display: "flex", alignItems: "center" }}
              >
                <span>{value.total}</span>
              </Col>
              <Col xs={3} md={3} style={{}}>
                <Row>
                  <Col xs={1} md={6}>
                    {handleStatus(value.status)}
                  </Col>
                  <Col xs={1} md={3}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      size="lg"
                      style={
                        value.status === "approved"
                          ? {
                              color: "green",
                              padding: " 0 10px",
                              cursor: "pointer",
                            }
                          : {
                              color: "grey",
                              padding: " 0 10px",
                              cursor: "pointer",
                            }
                      }
                      onClick={() => {
                        handleMissingProduct(value, "approved");
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faXmark}
                      size="lg"
                      style={
                        value.status === "missing"
                          ? {
                              color: "red",
                              cursor: "pointer",
                            }
                          : value.status === "urgent"
                          ? {
                              color: "red",
                              cursor: "pointer",
                            }
                          : {
                              color: "grey",
                              cursor: "pointer",
                            }
                      }
                      onClick={() => {
                        setShow(true);
                        setCurrentorder(value);
                      }}
                    />
                  </Col>
                  <Col xs={1} md={3}>
                    <span
                      onClick={() => {
                        setEdit(true);
                        setCurrentorder(value);
                      }}
                    >
                      Edit
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
          );
        })}
    </>
  );
}

export default OrderTableDataContainer;
