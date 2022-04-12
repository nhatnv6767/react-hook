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
        try {
            async function fetchData() {
                let res = await axios.get(url)
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
            fetchData();

        } catch (e) { // exception
            setIsError(true)
            setIsLoading(false)
        }

    }, []);

    return {
        data, isLoading, isError
    }
}

export default useFetch()