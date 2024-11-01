import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/postApi'
import Loader from '../components/ui/Loader';
import CountryCard from '../components/layout/CountryCard';
import SearchFilter from '../components/ui/SearchFilter';





function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([])

  // fro seach and filter functn
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");






  useEffect(() =>{
    startTransition(async() =>{
    const res =  await getCountryData()
    // console.log(res.data);
    setCountries(res.data)
   
    
    
    })
  },[])


  if(isPending){
    return (
     <Loader/>
    )
  }

  // console.log(search, filter);

  // logis

  const searchCountry = (country) =>{
    if(search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return country

  }

  const filterRegion = (country) =>{
    if(filter === "all") {
      return country;
     
    }else{
      // region is present in the data 
      return country.region === filter;
    }
  

  }



  const filterCountries = countries.filter((country) => searchCountry(country)
  && filterRegion(country)
)




  
  return (

    <div>
     <section className='country-section'>

      <SearchFilter
      search={search}
      setSearch={setSearch}
      filter={filter}
      setFilter={setFilter}
      />
     <ul className='grid grid-four-cols'>
          {filterCountries.map((curCountry, index) => (
            <CountryCard country={curCountry} key={index} />
          ))}
        </ul>
     </section>
    </div>
  )
}

export default Country