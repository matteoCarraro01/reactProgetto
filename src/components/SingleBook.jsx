
import { useState } from 'react';
import { Col, Button, Card } from 'react-bootstrap';
import CommentArea from './CommentArea.jsx';






function SingleBook({ book }) {
    const [selected, setSelected] = useState(false)
    const navigate = useState()
    const handleSelected = () => {
        setSelected(!selected)

    }


    return (
        <Col sm={6} md={4} lg={3} className="mb-4">
            <Card className="book-card h-100">
                <Card.Img
                    variant="top"
                    src={book.img}
                    onClick={handleSelected}
                    className={`book-img ${selected ? 'selected' : ''}`}
                />

                <Card.Body className="d-flex flex-column">
                    <Card.Title className="book-title">
                        {book.title}
                    </Card.Title>

                    <Card.Text className="book-price">
                        € {book.price}
                    </Card.Text>

                    <Button onClick={() => navigate(`/${book.asin}`)} variant="primary" className="mt-auto">
                        Acquista
                    </Button>
                </Card.Body>

                {selected && <CommentArea book={book} />}
            </Card>
        </Col>
    )
}
export default SingleBook;