import { useEffect, useState } from "react";
import useFetch from "../customize/fetch"
import moment from "moment"

const Covid = () => {
    // code cũ sẽ tạo ra nhiều request
    // vì mỗi 1 lần tạo new Date nó sẽ lấy thời gian hiện tại 
    // nên mỗi lần render lại component nó sẽ lấy tại khoảnh khắc ấy
    // tương đương với milisecond
    // const today = new Date(new Date().setHours(0, 0, 0, 0));
    const today = moment().startOf('day').toISOString(true);
    const priorDate = moment().startOf('day').subtract(30, 'days').toISOString(true);



    // dataCovid:data <=> let dataCovid = useFetch(link).data
    const { data: dataCovid, isLoading, isError } =
        useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`, true);

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