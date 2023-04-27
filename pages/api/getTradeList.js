import axios from "axios"
const getTradeList = (param) => {
    return axios.get(`/api/trade?pageNo=${param.pageNo}&numOfRows=${param.numOfRows}`)
}

export default getTradeList