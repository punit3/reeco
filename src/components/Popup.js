// import { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Popup(props) {
  const { show, handleClose, size, modalTitle } = props;

  return (
    <>
      <Modal onClose={handleClose} size={size} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "16px" }}>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </>
  );
}

export default Popup;
