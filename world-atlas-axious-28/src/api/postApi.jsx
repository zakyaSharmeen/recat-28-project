import axios from "axios"



// 1-base url
const api = axios.create({
    baseURL: "https://restcountries.com/v3.1"

})

// 2-http get method
export const getCountryData = () =>{
    return api.get("/all?fields=name,population,region,capital,flags")
}

// 2-http get method for individual data
export const getCountryIndData = (name) =>{
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
    )
}