import { useEffect, useState } from 'react'
import books from '../data/horror.json'
import { useParams } from 'react-router'
import CommentArea from '../components/CommentArea'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap'

function BookDetail() {

    const { asin } = useParams()
    const [book, setBook] = useState()

    useEffect(() => {
        const selectedBook = books.find((book) => asin == book.asin)
        setBook(selectedBook)
    }, [asin])

    if (!book) {
        return <h2 className='text-center mt-5'>Libro non trovato</h2>
    }

    return (

        <Container className="mt-4">

            <Row>

                <Col md={8}>

                    <Card className="shadow-sm">

                        <Row className="g-0">

                            <Col md={4}>
                                <Card.Img src={book.img} />
                            </Col>

                            <Col md={8}>
                                <Card.Body>

                                    <Card.Title>
                                        {book.title}
                                    </Card.Title>

                                    <Card.Text className="text-primary fs-5">
                                        € {book.price}
                                    </Card.Text>

                                    <Button variant="primary">
                                        Acquista
                                    </Button>

                                </Card.Body>
                            </Col>

                        </Row>

                    </Card>

                </Col>


                <Col md={4}>

                    <Card className="shadow-sm">

                        <Card.Body>

                            <Card.Title>
                                Recensioni
                            </Card.Title>

                            <CommentArea asin={book.asin} />

                        </Card.Body>

                    </Card>

                </Col>

            </Row>

        </Container>

    )
}

export default BookDetail