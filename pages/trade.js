import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import getTradeList from "./api/getTradeList";

const Trade = (props) => {  
    const rows = [10,20,40,80]
    const[pageNo, setPageNo] = useState(1)
    const[numOfRows, setNumOfRows] = useState(rows[0])
    const pageInfo = {
        pageNo: pageNo,
        numOfRows: numOfRows
    }

    const {data, status, error} = useQuery(['trade', pageInfo], async() => await getTradeList(pageInfo), {
        keepPreviousData: true,
        refetchOnMount: false,
        refetchOnWindowFocus: false
    })

    const handlePaginationCahnge = (e, value) => {
        setPageNo(value)
    }

    const handleNumOfRows = (e) => {
        setNumOfRows(e.target.value)
    }

    if(status === 'loading') {
        return <span>Loading...</span>
    }

    if (status ==='error') {
        return <span>{error.message}</span>
    }
    
    return (
        <div>
            <select onChange={handleNumOfRows} value={numOfRows}>
                {rows.map((item) => {
                    <option value={item} key={item}>{item}</option>
                })}
            </select>
             <ul>
                {data?.length === 0 && (
                    <li>비어있는 값</li>
                )}
                {data?.data?.data?.map((country, i) => (
                    <li key={i}>{country.country_nm}</li>
                ))}
            </ul>
            <div>
                
            </div>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const info = {
        pageNo: 1,
        numOfRows: 10
    }
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(
        ["trade", info],
        async() => await getTradeList(info)
    )

    return {
        props: {dehydratedState : dehydrate(queryClient)}
    }
}

export default Trade;

//suspense 사용해 볼 것.