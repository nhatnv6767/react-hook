import React from 'react'
import useFetch from '../customize/fetch'

function Blog() {

    const { data: dataBlogs, isLoading, isError } =
        useFetch(`https://jsonplaceholder.typicode.com/posts`, false);


    if (dataBlogs && dataBlogs.length > 0) {
        // lấy giá trị của phần tử từ 0 đến 10
        let newData = dataBlogs.slice(0, 10)
        console.log('Check DATA BLOG: ', newData);
    }

    return (
        <>
            { }
        </>
    )
}

export default Blog

// lần đầu khi chạy log ra 3 lần, vì ở fetch custom có 3 tham số
// ở fetch chúng ta set 3 lần (setData, setIsLoading, setIsError), 3 lần set lại state
// nên component của ta cần render lại 3 lần