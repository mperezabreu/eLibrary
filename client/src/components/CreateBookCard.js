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
              edit={false}
              buttonColor={"primary"}
              buttonType={"Add Book"}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CreateBookCard;
