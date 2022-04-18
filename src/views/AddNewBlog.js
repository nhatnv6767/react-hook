import React from 'react'
import './Blog.scss'
import { useState } from 'react'
import axios from 'axios'

function AddNewBlog() {
    // state
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmitBtn = () => {
        if (!title) {
            alert('Empty title')
            return
        }
        if (!content) {
            alert('Empty content')
            return
        }

        let data = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
    }
    return (
        <div className="add-new-container">
            <div className="text-add-new">--- Add new blog ---</div>
            <div className="inputs-data">
                <label>Title: </label>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div className="inputs-data">
                <label>Content: </label>
                <input
                    type="text"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                />
            </div>
            <button
                className="btn-add-new"
                onClick={handleSubmitBtn}
            >
                Submit
            </button>
        </div>
    )
}

export default AddNewBlog