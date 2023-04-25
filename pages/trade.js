import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import getTradeList from "./api/getTradeList";

const Trade = (props) => {
    const [pageNo, setPageNo] = useState(1);
    const [numOfRows, setnumOfRows] = useState(10);
    const query = useQuery(['trade', pageNo], () => getTradeList(pageInfo), {
        keepPreviousData: true,
        retry: 2
    })
    const data = query.data
    console.log(data);
    return (
        <ul>
            <li>sds</li>
        </ul>
        // <ul>
        //     {data.data.map((country) => (
        //         <li>{country.name}</li>
        //     ))}
        // </ul>
    )
}

export default Trade;

export const getStaticProps = () => {
    return {
        props: {
            pageNo: pageNo
        }
    }
}