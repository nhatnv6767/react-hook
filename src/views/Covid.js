import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Covid = () => {

    const [dataCovid, setDataCovid] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);


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