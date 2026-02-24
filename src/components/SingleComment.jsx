import React from 'react'
import { ListGroup } from 'react-bootstrap'

function SingleComment({ comment }) {
    return (
        <>

            <ListGroup.Item>{comment.comment}</ListGroup.Item>
        </>
    )
}

export default SingleComment