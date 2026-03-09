
import { Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router';

function SingleBook({ book, setSelectedBook, selectedBook }) {

    return (
        <Col sm={6} md={4} lg={3} className="mb-4">

            <Card
                className={`book-card h-100 ${selectedBook?.asin === book.asin ? "border border-danger border-3" : ""}`}
                data-testid='bookCard' onClick={() => setSelectedBook(book)}
                style={{ cursor: "pointer" }}
            >

                {/* <Link to={`/${book.asin}`}>
                    <Card.Img
                        variant="top"
                        src={book.img}
                    />
                </Link> */}
                <Card.Img
                    variant="top"
                    src={book.img}
                />

                <Card.Body className="d-flex flex-column">

                    <Card.Title className="book-title">
                        {book.title}
                    </Card.Title>

                    <Card.Text className="book-price">
                        € {book.price}
                    </Card.Text>

                    <Button
                        as={Link}
                        to={`/${book.asin}`}
                        variant="primary"
                        className="mt-auto"
                    >
                        Acquista
                    </Button>

                </Card.Body>

            </Card>

        </Col>
    )
}

export default SingleBook;
