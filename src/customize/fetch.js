import { useEffect, useState } from 'react'
import axios from "axios";
import moment from "moment";

// Bắt đầu với từ use thì react mới hiểu là 1 custom hook
const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    // componentDidMount
    useEffect(() => {

        const ourRequest = axios.CancelToken.source(); // <-- 1st step
        try {
            async function fetchData() {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token, // <-- 2nd step
                })
                // if have response, and have res.data => res.data else []
                let data = res && res.data ? res.data : []
                // sau khi lấy data về, ta check nếu có data và data.length
                // sau đó sẽ map qua, lọc qua xuyên suốt cái mảng đó
                // gán ngược lại cái biến Date của nó bằng moment.....
                if (data && data.length > 0) {
                    data.map(item => {
                        item.Date = moment(item.Date).format('DD/MM/YYYY');
                        // cuối cùng bắt buộc phải return về cái item 
                        return item
                    })
                    data = data.reverse()
                }

                setData(data)
                setIsLoading(false)
                setIsError(false)
            }
            setTimeout(() => {
                fetchData();
            }, 5000)


        } catch (e) { // exception
            console.log(">>>>> EEEEEEE", e)
            setIsError(true)
            setIsLoading(false)
        }

        return () => {
            ourRequest.cancel() // <-- 3rd step
        }
        // dependencies, 1 khi url truyền vào được thay đổi, phải
        // fetch lại data
    }, [url]);

    return {
        data, isLoading, isError
    }
}

export default useFetch;