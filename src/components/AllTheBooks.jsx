import { useState } from "react";
import SingleBook from './SingleBook';
import CommentArea from "./CommentArea";
import { Container, Row, Col } from 'react-bootstrap';

function AllTheBooks({ filteredBooks }) {

    const [selectedBook, setSelectedBook] = useState(null);

    return (
        <Container className="books-container">
            <Row>


                <Col md={8}>
                    <Row>
                        {filteredBooks.map((myBook) => (
                            <SingleBook
                                key={myBook.asin}
                                book={myBook}
                                setSelectedBook={setSelectedBook}
                                selectedBook={selectedBook}
                            />
                        ))}
                    </Row>
                </Col>


                <Col md={4}>
                    <div className="comment-box">
                        {selectedBook ? (
                            <CommentArea book={selectedBook} />
                        ) : (
                            <p>Seleziona un libro</p>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AllTheBooks;