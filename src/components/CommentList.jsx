import React from 'react'
import SingleComment from './SingleComment'
import { ListGroup } from 'react-bootstrap'

function CommentList({ comments }) {
    return (
        <ListGroup variant="flush">
            {comments.map(comment => (
                <ListGroup.Item
                    key={comment._id}
                    className="small text-muted py-1"
                >
                    {comment.comment}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}
export default CommentList


