import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";

import EditorModal from "./EditorModal";

class CreateBookCard extends Component {
  render() {
    return (
      <div>
        <Card
          color="secondary"
          className="card-style"
          style={{ flex: 1, borderColor: "#333" }}
        >
          <CardBody>
            <EditorModal
              readmode={false}
              buttonColor={"primary"}
              buttonType={"Agregar Libro"}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CreateBookCard;
