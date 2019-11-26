import React, { Component } from "react";
import pcimage from "../image/open_book-512.png";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Media
} from "reactstrap";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class EditorModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const book = this.props.book;
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
          block
        >
          Modificar Libro
        </Button>

        <Modal
          size="lg"
          centered
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
          </ModalHeader>

          <ModalBody>
          <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onInit={editor => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
          </ModalBody>
          
        </Modal>
      </div>
    );
  }
}



export default EditorModal;
