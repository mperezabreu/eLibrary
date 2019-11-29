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
import { Editor } from "@tinymce/tinymce-react";

class EditorModal extends Component {
  state = {
    modal: false,
    title: "",
    author: "",
    publisher: "",
    content: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onEditorChange = e => {
    this.setState({ content: e.target.getContent() });
  };

  onSubmit = e => {
    e.preventDefault();

    const newBook = {
      title: this.state.title,
      author: this.state.author,
      publisher: this.state.publisher,
      content: this.state.content
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
            <Form onSubmit={this.onSubmit}>
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
              <Editor
                initialValue="<p>This is the initial content of the editor</p>"
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount"
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic backcolor | \
                   alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | help"
                }}
                onChange={this.onEditorChange}
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
