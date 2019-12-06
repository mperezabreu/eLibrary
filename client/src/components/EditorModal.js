import React, { Component } from "react";
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
    content: "",
    htmlcontent: "",
    readmode: true
  };

  componentDidMount() {
    this.setState({
      htmlcontent: this.props.htmlcontent,
      title: this.props.booktitle,
      author: this.props.bookauthor,
      publisher: this.props.bookpublisher,
      readmode: this.props.readmode
    });
  }

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
    const htmlcontent = this.state.htmlcontent;
    const admin = this.props.admin;
    return (
      <div>
        <Button
          disabled={admin}
          color={this.props.buttonColor}
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
          block
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
                    value={this.state.title}
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
                    value={this.state.author}
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
                    value={this.state.publisher}
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
            </Form>
            <Editor
              initialValue={htmlcontent}
              disabled={this.props.readmode}
              init={{
                id: "TinyMCE",
                height: 500,
                menubar: false,
                display: "block",
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount"
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help"
              }}
              onChange={this.onEditorChange}
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //book: state.book
});

export default connect(mapStateToProps, { addBook })(EditorModal);
