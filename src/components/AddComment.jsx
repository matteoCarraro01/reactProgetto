import React, { useState } from "react";
import { Button, Form, Card, Stack, Spinner } from "react-bootstrap";

function AddComment({ asin, fetchComments }) {

    const [formData, setFormData] = useState({
        comment: "",
        rate: "",
        elementId: asin
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            await fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTc5MWQwZGY1Y2I1ZDAwMTU0ZjQzNTYiLCJpYXQiOjE3NzE2MTM5NTQsImV4cCI6MTc3MjgyMzU1NH0.wuWbetq0r-U2eMff3VxZmh7H-GP8GHkUA3TgjQU6Fe8",
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(formData)
            });

            fetchComments();

            setFormData({
                comment: "",
                rate: "",
                elementId: asin
            });

        } catch (error) {
            console.log(error);
        }

        setLoading(false);
    };

    return (
        <Card className="comment-form-card">
            <Card.Body>

                <Card.Title className="mb-3">Add a review</Card.Title>

                <Form onSubmit={handleSubmit}>

                    <Stack gap={3}>

                        <Form.Group>
                            <Form.Label>Comment</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Write your comment..."
                                name="comment"
                                value={formData.comment}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Rate</Form.Label>
                            <Form.Select
                                name="rate"
                                value={formData.rate}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select rating</option>
                                <option value="1">⭐ 1</option>
                                <option value="2">⭐⭐ 2</option>
                                <option value="3">⭐⭐⭐ 3</option>
                                <option value="4">⭐⭐⭐⭐ 4</option>
                                <option value="5">⭐⭐⭐⭐⭐ 5</option>
                            </Form.Select>
                        </Form.Group>

                        <Button
                            variant="danger"
                            type="submit"
                            className="submit-review-btn"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Spinner animation="border" size="sm" className="me-2" />
                                    Sending...
                                </>
                            ) : (
                                "Submit Review"
                            )}
                        </Button>

                    </Stack>

                </Form>

            </Card.Body>
        </Card>
    );
}

export default AddComment;