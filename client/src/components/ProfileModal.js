import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Media
} from "reactstrap";

class ProfileModal extends Component {
  state = {
    modal: false,
    name: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Book Profile
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            <Media>
              <Media left href="#">
                <Media
                  object
                  data-src="holder.js/64x64"
                  alt="Generic placeholder image"
                />
              </Media>
              <Media body>
                <Media heading>Media heading</Media>
                Media test
              </Media>
            </Media>
          </ModalHeader>

          <ModalBody>test</ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ProfileModal;
