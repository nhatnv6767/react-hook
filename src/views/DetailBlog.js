import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

function DetailBlog() {
    let { id } = useParams();
    let history = useHistory();

    const handleBackData = () => {
        history.push("/blog")
    }
    return (
        <>
            <div>
                <span style={{ cursor: 'pointer' }} onClick={handleBackData}>
                    &#60;-- Back
                </span>
            </div>
            <h1>DetailBlog with id: {id}</h1>
        </>
    )
}

export default DetailBlog