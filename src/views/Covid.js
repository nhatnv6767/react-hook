import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Covid = () => {

    const [dataCovid, setDataCovid] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    // componentDidMount
    useEffect(async () => {
        try {
            let res = await axios.get('https://api.covid19api.com/country/vietnammmm?from=2021-01-01T00:00:00Z&to=2021-04-11T00:00:00Z')
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

            setDataCovid(data)
            setIsLoading(false)
            setIsError(true)
        } catch (e) { // exception
            setIsError(false)
            alert(e.message)
        }

    }, []);
    return (
        <>
            <h3>Covid 19 tracking in Viet Name: </h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {isError === false && isLoading === false && dataCovid && dataCovid.length > 0 &&
                        dataCovid.map(item => {
                            return (
                                <tr key={item.ID}>
                                    <td>{item.Date}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Active}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>
                                </tr>
                            )
                        })
                    }
                    {isLoading === true
                        && <tr>
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>
                                Loading...
                            </td>
                        </tr>
                    }

                    {isError === true
                        && <tr>
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>
                                Something wrong...
                            </td>
                        </tr>
                    }

                </tbody>

            </table>
        </>
    )
}

export default Covid;