import React from 'react'
import './Blog.scss'

function AddNewBlog() {
    return (
        <div className="add-new-container">
            <div className="text-add-new">--- Add new blog ---</div>
            <div>
                <label>Title: </label>
                <input type="text" />
            </div>
            <div>
                <label>Content: </label>
                <input type="text" />
            </div>
            <button>Submit</button>
        </div>
    )
}

export default AddNewBlog