
import axios from "axios";

const api = axios.create({
    baseURL: "https://v6.exchangerate-api.com/v6/a549ab0d7e97664d7cde8fff"
})

export const currencyConverter = (fromCurrency, toCurrency, amount) =>{
    return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`)
}