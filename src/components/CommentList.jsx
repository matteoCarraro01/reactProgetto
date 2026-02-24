import React from 'react'
import SingleComment from './SingleComment'
import { ListGroup } from 'react-bootstrap'

function CommentList({ comments }) {
    return (
        <ListGroup>
            {comments.map(comment =>
                <SingleComment key={comment._id} comment={comments} />
            )}
        </ListGroup>
    )
}

export default CommentList


