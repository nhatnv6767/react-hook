import React from 'react'
import useFetch from '../customize/fetch'

function Blog() {

    const { data: dataBlogs, isLoading, isError } =
        useFetch(`https://jsonplaceholder.typicode.com/posts`, false);

    let newData = [];
    if (dataBlogs && dataBlogs.length > 0) {
        // lấy giá trị của phần tử từ 0 đến 10
        newData = dataBlogs.slice(0, 10)
    }

    return (
        <>
            {newData && newData.length > 0 && newData.map(item => {

            })}
        </>
    )
}

export default Blog

// lần đầu khi chạy log ra 3 lần, vì ở fetch custom có 3 tham số
// ở fetch chúng ta set 3 lần (setData, setIsLoading, setIsError), 3 lần set lại state
// nên component của ta cần render lại 3 lần