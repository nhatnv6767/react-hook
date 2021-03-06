import { useEffect, useState } from 'react'
import axios from "axios";
import moment from "moment";

// Bắt đầu với từ use thì react mới hiểu là 1 custom hook
const useFetch = (url, isCovidData) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    // componentDidMount
    useEffect(() => {
        const ourRequest = axios.CancelToken.source(); // <-- 1st step
        async function fetchData() {
            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token, // <-- 2nd step
                })
                // if have response, and have res.data => res.data else []
                let data = res && res.data ? res.data : []
                // sau khi lấy data về, ta check nếu có data và data.length
                // sau đó sẽ map qua, lọc qua xuyên suốt cái mảng đó
                // gán ngược lại cái biến Date của nó bằng moment.....
                if (data && data.length > 0 && isCovidData) {
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

            } catch (err) { // exception
                // nếu mà biến là 1 instant của axios mà đã cancel 
                if (axios.isCancel(err)) {
                    console.log('Request canceled', err.message)
                } else {
                    // handle error
                    setIsError(true)
                    setIsLoading(false)
                }
            }
        }
        setTimeout(() => {
            fetchData();
        }, 300)
        return () => {
            ourRequest.cancel('Operation canceled by the user.') // <-- 3rd step
        }
        // dependencies, 1 khi url truyền vào được thay đổi, phải
        // fetch lại data
    }, [url]);

    return {
        data, isLoading, isError
    }
}

export default useFetch;