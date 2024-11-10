import React, { useEffect, useState } from 'react'
import Card from './Card'

function Newsapp() {

    const API = "cc27329b81a6412a9e391c3307ffdba6"
    const [newsData, setNewsData] = useState([])
    const[search, setSearch] = useState("virat")

    const getData = async () =>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API}`)
        const jsonData = await response.json()
        // console.log(jsonData);
        // console.log(jsonData.articles);
        
        setNewsData(jsonData.articles.slice(0, 50))
        
    }

    useEffect(() =>{
        getData()
    },[])


    const handleInput = (e) =>{ 
        console.log(e.target.value)
        setSearch(e.target.value)

        
    }


    const userInput = (e) =>{
        setSearch(e.target.value)


    }

    



  return (
    <div>
    <nav>
        <div>
            <h1>Trendy News</h1>
        </div>
       
        <div className='searchBar'>
            <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
            <button onClick={getData}>Search</button>
        </div>
    </nav>
    <div>
        <p className='head'>Stay Update with TrendyNews</p>
    </div>
    <div className='categoryBtn'>
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput}  value="politics">Politics</button>
        <button onClick={userInput}  value="entertainment">Entertainment</button>
        <button onClick={userInput}  value="health">Health</button>
        <button onClick={userInput}  value="fitness">Fitness</button>
    </div>
    <div>
        <Card newsData={newsData}/>
        
    </div>
</div>
  )
}

export default Newsapp