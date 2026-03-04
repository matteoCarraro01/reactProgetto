import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

function AddComment({ asin, fetchComments }) {
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
    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments`,
                {
                    headers: {
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTc5MWQwZGY1Y2I1ZDAwMTU0ZjQzNTYiLCJpYXQiOjE3NzE2MTM5NTQsImV4cCI6MTc3MjgyMzU1NH0.wuWbetq0r-U2eMff3VxZmh7H-GP8GHkUA3TgjQU6Fe8',


                        "Content-Type": "application/json"
                    },
                    method: 'POST',
                    body: JSON.stringify(formData)
                },
            );
            fetchComments();
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="comment"
                        name='comment'
                        onChange={handleChange}

                    />

                </Form.Group>
                <Form.Group as={Col} md="12" controlId="rate">
                    <Form.Label>Rate</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="rate"
                        name='rate'
                        onChange={handleChange}

                    />

                </Form.Group>
                <Button onClick={handleSubmit} type="submit">Submit form</Button>

            </Row>
        </Form>
    )
}

export default AddComment