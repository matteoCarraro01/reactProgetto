import React from 'react'
import { ListGroup } from 'react-bootstrap'



function SingleComment({ comment }) {
    return (
        <ListGroup.Item className="small">

            {"⭐".repeat(comment.rate)}

            <div>{comment.comment}</div>

        </ListGroup.Item>
    )
}

export default SingleComment

