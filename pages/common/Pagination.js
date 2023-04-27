import { useState } from "react";

const Pagination = ({total, limit, page, setPage}) => {
    const numPages = Math.ceil(total/limit)

    let first = page - ((page-1) % 5)
    let last = page - ((page-1) % 5) + 4
    last = last > numPages ? numPages : last
    console.log(page, first, last);
    return (
        <div>
            <button onClick={() => {
                setPage(first-1)
            }} disabled={first===1}>
                &lt;
            </button>
            {Array(last-first+1).fill().map((_,i) => {
                return (
                    <button key={i}
                        onClick={() => {
                            setPage(first+i)
                    }}>
                        {first+i}
                    </button>
                )
            })}
            <button onClick={() => {
                setPage(last+1)
            }} disabled={last===numPages}>
                &gt;
            </button>
        </div>
    )
}

export default Pagination