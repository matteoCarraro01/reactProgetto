import CommentList from "./CommentList";
import { useEffect, useState } from "react";
import AddComment from "./AddComment";
import React from "react";


function CommentArea({ book }) {
    const [comments, setComments] = useState([])

    const fetchComments = async () => {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/books/${book.asin}/comments/`,
                {
                    headers: {
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTc5MWQwZGY1Y2I1ZDAwMTU0ZjQzNTYiLCJpYXQiOjE3NzE2MTM5NTQsImV4cCI6MTc3MjgyMzU1NH0.wuWbetq0r-U2eMff3VxZmh7H-GP8GHkUA3TgjQU6Fe8',
                    },
                },
            )
            const data = await response.json()
            setComments(data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => { fetchComments() }, []);



    return (
        <div className="comment-area">
            <h6 className="comment-title">Commenti</h6>

            <div className="comment-add">
                <AddComment asin={book.asin} fetchComments={fetchComments} />
            </div>

            <div className="comment-list">
                <CommentList comments={comments} />
            </div>
        </div>
    )
}


export default CommentArea;


