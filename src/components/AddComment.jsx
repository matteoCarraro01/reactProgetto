import React, { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'

function AddComment({ asin }) {
    const [formData, setFormData] = useState({
        comment: '',
        rate: '',
        elementId: asin
    })
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        console.log(formData)

    }, [formData])
    const handleSubmit = () => { }
    return (
        <Form onSubmit={handleSubmit} className="add-comment-form">
            <Row className="g-2 align-items-end">
                <Col xs={12}>
                    <Form.Control
                        size="sm"
                        type="text"
                        placeholder="Scrivi un commento"
                        name="comment"
                        onChange={handleChange}
                    />
                </Col>

                <Col xs={8}>
                    <Form.Select
                        size="sm"
                        name="rate"
                        onChange={handleChange}
                    >
                        <option value="">Voto</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Select>
                </Col>

                <Col xs={4}>
                    <Button size="sm" className="w-100" variant="primary">
                        Invia
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default AddComment