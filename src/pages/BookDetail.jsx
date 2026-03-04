import { useEffect, useState } from 'react'
import books from '../data/horror.json'
import { useParams } from 'react-router'
import CommentArea from '../components/CommentArea'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

function BookDetail() {
    const { asin } = useParams()
    const [book, setBook] = useState()


    useEffect(() => {
        const selectedBook = books.find((book) => {
            return asin == book.asin
        })
        setBook(selectedBook)
        console.log(selectedBook)
    }, [asin])


    return (
        <>
            {book && (
                <Container>
                    <Card>
                        <Card.Img variant="top" src={book.img} />

                        <Card.Body className="d-flex flex-column">
                            <Card.Title className="book-title">
                                {book.title}
                            </Card.Title>

                            <Card.Text className="book-price">
                                € {book.price}
                            </Card.Text>

                            <Button variant="primary">
                                Go somewhere
                            </Button>
                        </Card.Body>
                    </Card>

                    <CommentArea asin={book.asin} />
                </Container>
            )}
        </>
    )
}

export default BookDetail;


