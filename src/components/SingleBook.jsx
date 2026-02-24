
import { useState } from 'react';
import { Col, Button, Card } from 'react-bootstrap';
import CommentArea from './CommentArea.jsx';






function SingleBook({ book }) {
    const [selected, setSelected] = useState(false)
    const handleSelected = () => {
        setSelected(!selected)

    }


    return (

        <Col sm={6} md={4} lg={3}>
            <Card className='h-100'>
                <Card.Img variant="top" src={book.img} onClick={handleSelected} className={selected ? 'border border-3 border-danger' : ''} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        {book.price}
                    </Card.Text>
                    <Button variant="primary">Acquista</Button>
                    {selected && <CommentArea book={book} />}
                </Card.Body>
            </Card>

        </Col>



    )

}

export default SingleBook;