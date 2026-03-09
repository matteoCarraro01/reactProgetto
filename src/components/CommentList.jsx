import { Card, Stack, Badge } from "react-bootstrap";

function CommentList({ comments }) {
    return (
        <Stack gap={2} className="mt-3">

            {comments.map((comment) => (
                <Card key={comment._id} bg="dark" text="light" className="comment-card">

                    <Card.Body className="py-2 px-3">

                        <div className="d-flex justify-content-between align-items-center">

                            <Card.Text className="mb-0">
                                {comment.comment}
                            </Card.Text>

                            <Badge bg="danger">
                                ⭐ {comment.rate}
                            </Badge>

                        </div>

                    </Card.Body>

                </Card>
            ))}

        </Stack>
    );
}

export default CommentList;