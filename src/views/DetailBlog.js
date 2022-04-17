import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useFetch from '../customize/fetch'
import './Blog.scss'

function DetailBlog() {
    let { id } = useParams();
    let history = useHistory();

    const { data: dataBlogDetail, isLoading, isError } =
        useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);


    const handleBackData = () => {
        history.push("/blog")
    }
    // console.log("Check data detail: ", dataBlogDetail)
    return (
        <>
            <div>
                <span style={{ cursor: 'pointer' }} onClick={handleBackData}>
                    &#60;-- Back
                </span>
            </div>
            <div className="blog-detail">

                {dataBlogDetail &&
                    <>
                        <div className="title">
                            Blog ID: {id} --- {dataBlogDetail.title}
                        </div>
                        <div className="content">
                            {dataBlogDetail.body}
                        </div>
                    </>
                }

            </div>
        </>
    )
}

export default DetailBlog