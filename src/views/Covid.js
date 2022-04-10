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
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tbody>

        </table>
    )
}

export default Covid;