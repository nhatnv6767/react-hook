import { useEffect, useState } from "react";
import useFetch from "../customize/fetch"
import moment from "moment"

const Covid = () => {

    const today = new Date(new Date().setHours(0, 0, 0, 0));
    const priorDate = moment().subtract(30, 'days')
    // dataCovid:data <=> let dataCovid = useFetch(link).data
    const { data: dataCovid, isLoading, isError } = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate.toISOString()}&to=${today.toISOString()}`)

    return (
        <div style={{ background: '#282c34' }}>
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
        </div>
    )
}

export default Covid;