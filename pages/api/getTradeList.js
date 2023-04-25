import axios from "axios"
const getTradeList = (param) => {
    return axios.get(`http://localhost:8080/api/trade?pageNo=${param.pageNo}&numOfRows=${param.numOfRows}`)
}

export default getTradeList