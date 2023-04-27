import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import getTradeList from "./api/getTradeList";
import Pagination from "./common/Pagination";

const Trade = (props) => {  
    let rows = [10,20,40,80]
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

    const handleNumOfRows = (e) => {
        setNumOfRows(e.target.value)
        setPageNo(1)
    }

    useEffect(() => {
        console.log(data);
    })

    if(status === 'loading') {
        return <span>Loading...</span>
    }

    if (status ==='error') {
        return <span>{error.message}</span>
    }
    
    return (
        <div>
            <select onChange={handleNumOfRows}>
                {rows.map((item) => (
                    <option value={item} key={item}>{item}</option>
                ))}
            </select>
            <table>
                <thead>
                    <tr>
                        <th>{`국가 영문`}</th>
                        <th>{`국가 코드(2자리)`}</th>
                        <th>{`국가 국문`}</th>
                        <th>{`수출 품목`}</th>
                        <th>{`수입 품목`}</th>
                        <th>{`수출 금액`}</th>
                        <th>{`수입 금액`}</th>
                        <th>{`해당 연도`}</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.length === 0 && (
                        <tr>
                            <td colSpan={5}>{`비어있는 값`}</td>
                        </tr>
                    )}
                    {data?.data?.data?.map((country, i) => (
                        <tr key={i}>
                            <td>{country.country_eng_nm}</td>
                            <td>{country.country_iso_alp2}</td>
                            <td>{country.country_nm}</td>
                            <td>{country.export_cn}</td>
                            <td>{country.income_cn}</td>
                            <td>{country.yt_export_amount}</td>
                            <td>{country.yt_income_amount}</td>
                            <td>{country.yt_trade_year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination total={data.data.totalCount} limit={numOfRows} page={pageNo} setPage={setPageNo} />
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