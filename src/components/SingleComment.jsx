import React from 'react'
import { ListGroup } from 'react-bootstrap'



function SingleComment({ comment }) {
    return (
        <ListGroup.Item className="py-1 small text-muted">
            {comment.comment}
        </ListGroup.Item>
    )
}

export default SingleComment

