import React from "react";
import Alert from "react-bootstrap/Alert";

import "../../styles/main.css";

export default function ToastMessage() {
  return (
    <>
      <Alert className="alertAnimation" variant="primary" dismissable>
        Weather Info Saved.
      </Alert>
    </>
  );
}
