import React, { Component } from "react";
import pcimage from "../image/open_book-512.png";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addBook } from "../actions/bookActions";
import uuid from "uuid";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class EditorModal extends Component {
  state = {
    modal: false,
    book: {
      title: "",
      author: "",
      publisher: "",
      pubdate: "",
      upldate: "",
      data: ""
    }
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = data => e => {
    e.preventDefault();

    const newBook = {
      id: uuid(),
      title: this.state.title,
      author: this.state.author,
      publisher: this.state.publisher,
      pubdate: this.state.pubdate,
      upldate: Date.now.toString,
      content: data
    };

    this.props.addBook(newBook);

    this.toggle();
  };

  render() {
    var data;
    return (
      <div>
        <Button
          color={this.props.buttonColor}
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          {this.props.buttonType}
        </Button>

        <Modal
          size="lg"
          centered
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            {" "}
            Fill the form and write your book:{" "}
          </ModalHeader>

          <ModalBody>
            <Form onSubmit={this.onSubmit(this, data)}>
              <FormGroup row>
                <Label for="Title">Title:</Label>
                <Col>
                  <Input
                    type="title"
                    name="title"
                    id="title"
                    placeholder="Title"
                    onChange={this.onChange}
                  />
                </Col>
                <Label for="author">Author:</Label>
                <Col>
                  <Input
                    type="author"
                    name="author"
                    id="author"
                    placeholder="Author"
                    onChange={this.onChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="publisher">Publisher:</Label>
                <Col>
                  <Input
                    type="publisher"
                    name="publisher"
                    id="publisher"
                    placeholder="Publisher"
                    onChange={this.onChange}
                  />
                </Col>
                <Label for="pubdate">Published date:</Label>
                <Col>
                  <Input type="pubdate" name="pubdate" id="pubdate" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="upldate">Uploaded in:</Label>
                <Col>
                  <Input type="upldate" name="upldate" id="upldate" />
                </Col>
              </FormGroup>
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add Book
              </Button>

              <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor 5!</p>"
                onInit={editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  this.data = editor.getData();
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  book: state.book
});

export default connect(mapStateToProps, { addBook })(EditorModal);
