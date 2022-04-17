import React from 'react'
import useFetch from '../customize/fetch'
import './Blog.scss'

function Blog() {

    const { data: dataBlogs, isLoading, isError } =
        useFetch(`https://jsonplaceholder.typicode.com/posts`, false);

    let newData = [];
    if (dataBlogs && dataBlogs.length > 0) {
        // lấy giá trị của phần tử từ 0 đến 10
        newData = dataBlogs.slice(0, 10)
    }

    return (
        <div className="blogs-container">
            {newData && newData.length > 0 && newData.map(item => {
                return (
                    <div className="single-blog">
                        <div className="title">Title: {item.title}</div>
                        <div className="content">{item.body}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Blog

// lần đầu khi chạy log ra 3 lần, vì ở fetch custom có 3 tham số
// ở fetch chúng ta set 3 lần (setData, setIsLoading, setIsError), 3 lần set lại state
// nên component của ta cần render lại 3 lần