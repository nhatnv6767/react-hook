import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

function DetailBlog() {
    let { id } = useParams();
    return (
        <>
            <div>&#60;-- Back</div>
            <h1>DetailBlog with id: {id}</h1>
        </>
    )
}

export default DetailBlog