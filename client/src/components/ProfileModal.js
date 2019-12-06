import React, { Component } from "react";
import pcimage from "../image/open_book-512.png";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Media,
  Container
} from "reactstrap";
import EditorModal from "./EditorModal";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import Speech from "react-speech";

class ProfileModal extends Component {
  state = {
    modal: false,
    title: "",
    author: "",
    publisher: "",
    content: "",
    htmlcontent: ""
  };

  componentDidMount() {
    this.setState({
      htmlcontent: this.props.htmlcontent,
      title: this.props.booktitle,
      author: this.props.bookauthor,
      publisher: this.props.bookpublisher,
      edit: this.props.edit
    });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const book = this.props.book;
    const htmlcontent = this.props.htmlcontent;

    return (
      <div>
        <Container>
          <Button
            color="primary"
            style={{ marginBottom: "2rem" }}
            onClick={this.toggle}
            block
          >
            Book Profile
          </Button>

          <Modal
            size="lg"
            centered
            isOpen={this.state.modal}
            toggle={this.toggle}
          >
            <ModalHeader toggle={this.toggle}>
              <Media>
                <Media left href="#">
                  <Media object src={pcimage} alt="Generic placeholder image" />
                </Media>
                <Media body>
                  <Media heading>{book.title}</Media>
                </Media>
              </Media>
            </ModalHeader>

            <ModalBody>
              Escrito por: {book.author} en fecha: {book.pubdate}
              Una breve descripcion estaria aqui: Subido enL {book.upldate}
            </ModalBody>
            <EditorModal
              readmode={true}
              htmlcontent={htmlcontent}
              booktitle={book.title}
              bookauthor={book.author}
              bookpublisher={book.publisher}
              buttonColor={"primary"}
              buttonType={"Leer Libro"}
            />
            <Container>
              <Speech text={htmlcontent.replace(/<[^>]*>?/gm, "")} />
            </Container>
          </Modal>
        </Container>
      </div>
    );
  }
}

export default ProfileModal;
