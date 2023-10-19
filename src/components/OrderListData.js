import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import SearchBox from "./SearchBox";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import OrderListTopContainer from "./OrderListTopContainer";
import OrderTableDataContainer from "./OrderTableDataContainer";
import { useSelector, useDispatch } from "react-redux";
import { useState, useCallback, useEffect } from "react";
// import { data } from "../Data";

// Styles for the "Add Item" button
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

// Styles for a container
const ContainerStyles = {
  display: "flex",
  justifyContent: "end",
  alignItems: "baseline",
};

function OrderListData() {
  // Using useSelector to get order data from Redux state
  const state = useSelector((state) =>
    state.orders.data[0] ? state.orders.data[0].order : []
  );

  // State to manage the list of orders
  const [ordersList, setOrderList] = useState([]);

  // Callback function to update order status
  const handleSetOrder = useCallback(
    (newValue, value) => {
      let newData = updateObjectById(ordersList, newValue.id, {
        status: value,
      });

      setOrderList(newData);
    },
    [ordersList]
  );

  // Callback function to handle search results
  const handleSearchResults = useCallback(
    (newValue) => {
      let newData = newValue;

      setOrderList(newData);
    },
    [ordersList]
  );

  // Effect to set the initial order list
  useEffect(() => {
    setOrderList(state);
  }, [state]);

  // Function to update an object in an array by ID
  const updateObjectById = (arr, idToFind, newValues) => {
    return arr.map((obj) => {
      if (obj.id === idToFind) {
        // Update the object's properties with newValues
        return { ...obj, ...newValues };
      }
      return obj;
    });
  };

  // Function to update an edited order in the list
  const updateEditedOrder = (updatedOrder) => {
    const index = ordersList.findIndex((obj) => obj.id === updatedOrder.id);

    if (index !== -1) {
      const newArray = [
        ...ordersList.slice(0, index),
        { ...updatedOrder },
        ...ordersList.slice(index + 1),
      ];

      setOrderList(newArray);
    }
  };

  return (
    <>
      {/* Container for the header */}
      <Container className="container-header">
        <Row>
          <Col>
            {/* SearchBox component to filter orders */}
            <SearchBox
              setOrderList={handleSearchResults}
              data={state}
            ></SearchBox>
          </Col>
          <Col style={ContainerStyles}>
            <span>
              {/* "Add Item" Button */}
              <Button style={ButtonStyles}>Add Item</Button>
            </span>
            <span>
              {/* FontAwesome icon for printing */}
              <FontAwesomeIcon
                size="xl"
                icon={faPrint}
                style={{ color: "#307838" }}
              />
            </span>
          </Col>
        </Row>

        {/* OrderListTopContainer component */}
        <OrderListTopContainer data={ordersList}></OrderListTopContainer>

        {/* OrderTableDataContainer component */}
        <OrderTableDataContainer
          data={ordersList}
          setOrderList={handleSetOrder}
          updateEditedOrder={updateEditedOrder}
        ></OrderTableDataContainer>
      </Container>
    </>
  );
}

export default OrderListData;
