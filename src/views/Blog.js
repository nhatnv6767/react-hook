import React from 'react'
import useFetch from '../customize/fetch'
import './Blog.scss'
import { Link } from 'react-router-dom'

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
            {isLoading === false && newData && newData.length > 0 && newData.map(item => {
                return (
                    <div className="single-blog" key={item.id}>
                        <div className="title">{item.title}</div>
                        <div className="content">{item.body}</div>
                        <button>
                            <Link to={`/blog/${item.id}`}>
                                View detail
                            </Link>
                        </button>
                    </div>
                )
            })}
            {isLoading &&
                <div style={{ textAlign: 'center !important', width: '100%' }}>Loading data...</div>
            }
        </div>
    )
}

export default Blog

// lần đầu khi chạy log ra 3 lần, vì ở fetch custom có 3 tham số
// ở fetch chúng ta set 3 lần (setData, setIsLoading, setIsError), 3 lần set lại state
// nên component của ta cần render lại 3 lần