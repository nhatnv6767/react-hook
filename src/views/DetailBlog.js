import React from 'react'
import { useParams } from 'react-router-dom'

function DetailBlog() {
    let { id } = useParams();
    return (
        <div>DetailBlog with id: {id}</div>
    )
}

export default DetailBlog