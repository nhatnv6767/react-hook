import React from 'react'
import './Blog.scss'
import { useState } from 'react'

function AddNewBlog() {
    // state
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    return (
        <div className="add-new-container">
            <div className="text-add-new">--- Add new blog ---</div>
            <div className="inputs-data">
                <label>Title: </label>
                <input type="text" value={title} />
            </div>
            <div className="inputs-data">
                <label>Content: </label>
                <input type="text" />
            </div>
            <button className="btn-add-new">Submit</button>
        </div>
    )
}

export default AddNewBlog