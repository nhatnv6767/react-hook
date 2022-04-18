import React from 'react'
import useFetch from '../customize/fetch'
import './Blog.scss'
import { Link, useHistory } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import AddNewBlog from './AddNewBlog'

function Blog() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let history = useHistory();
    const { data: dataBlogs, isLoading, isError } =
        useFetch(`https://jsonplaceholder.typicode.com/posts`, false);

    let newData = [];
    if (dataBlogs && dataBlogs.length > 0) {
        // lấy giá trị của phần tử từ 0 đến 10
        newData = dataBlogs.slice(0, 10)
    }

    const handleAddNew = (blog) => {
        setShow(false);
        newData.unshift(blog);
        console.log(">>>> Check handle add new: ", newData);
    }

    return (
        <>
            <Button variant="primary" className="my-3" onClick={handleShow}>
                + Add new blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog handleAddNew={handleAddNew} />
                </Modal.Body>
            </Modal>

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
        </>
    )
}

export default Blog

// lần đầu khi chạy log ra 3 lần, vì ở fetch custom có 3 tham số
// ở fetch chúng ta set 3 lần (setData, setIsLoading, setIsError), 3 lần set lại state
// nên component của ta cần render lại 3 lần


// my-3: m: mergen, y la trục y, 3 là đơn vị 1 <=> 0.25rem

