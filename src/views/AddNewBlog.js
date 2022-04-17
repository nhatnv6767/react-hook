import React from 'react'

function AddNewBlog() {
    return (
        <div>
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