import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Card from "../components/Card";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import Form from "../components/Form";
import BooksList from "../components/BooksList";

class Home extends Component {
  state = {
    books: [],
    q: "",
    message: "Enter a book title"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No books were found."
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      title: book.volumeInfo.title,
      bookId: book.id,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink
    }).then(() => this.getBooks());
  };

  render() {
    return (
      <>
        <Jumbotron/>
        <Container>
          <Row>
            <Col size="md-12">
          <Form
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            q={this.state.q}
          />
          </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <Card title="Results" icon="fas fa-book-open">
                {this.state.books.length ? (
                  <List>
                    {this.state.books.map(book => (
                      <BooksList
                        key={book.id}
                        title={book.volumeInfo.title}
                        link={book.volumeInfo.infoLink}
                        authors={book.volumeInfo.authors.join(", ")}
                        description={book.volumeInfo.description}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        Button={() => (
                          <button
                            onClick={() => this.handleBookSave(book.id)}
                            className="btn btn-info ml-2"
                          >
                            Save
                        </button>
                        )}
                      />
                    ))}
                  </List>
                ) : (
                    <h2 className="text-center">{this.state.message}</h2>
                  )}
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}


export default Home;
