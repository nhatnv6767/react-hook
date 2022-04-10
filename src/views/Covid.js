import { useEffect, useState } from "react";
import axios from "axios";

const Covid = () => {

    const [dataCovid, setDataCovid] = useState([]);

    // componentDidMount
    useEffect(async () => {
        let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2021-01-01T00:00:00Z&to=2021-04-11T00:00:00Z')
        // if have response, and have res.data => res.data else []
        let data = res && res.data ? res.data : []
        setDataCovid(data)
    }, []);
    return (
        <table>
            {console.log(">>>> Check data covid: ", dataCovid)}
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
                {dataCovid && dataCovid.length > 0 && dataCovid.map(item => {
                    return (
                        <tr key={item.ID}>
                            <td>{item.Confirmed}</td>
                            <td>{item.Active}</td>
                            <td>{item.Deaths}</td>
                            <td>{item.Recovered}</td>
                        </tr>
                    )
                })}

            </tbody>

        </table>
    )
}

export default Covid;