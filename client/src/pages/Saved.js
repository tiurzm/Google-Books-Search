import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import BooksList from "../components/BooksList";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
    return (
      <>
      <Jumbotron/>
      <Container>  
        <Row>
          <Col size="md-12">
            <h2 className="text-center">
              <strong>Google Books</strong>
            </h2>
            <h3 className="text-center">These are the books you have saved</h3>
          </Col>
          <Col size="md-12">
            <Card title="Saved Books" icon="bookmark">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <BooksList
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                  <h2 className="text-center">You haven't saved any books yet.</h2>
                )}
            </Card>
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}

export default Saved;