import React, { useEffect, useState } from 'react'
import "../src/components/style.css"
import {AnimeList} from './components/AnimeList'
import {AnimeInfo} from './components/AnimeInfo'

function App() {

  const [animeData, setAnimeData] = useState()
  const [animeIfo, setAnimeIfo] = useState()
  const [search, setSearch] = useState("Naruto")




  

  const getData = async () =>{
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
    const resData = await res.json()
    // console.log(resData.data);
    setAnimeData(resData.data)

    
  }

  useEffect(() =>{
    getData()

  },[search])
  



  return (
    <>
      <div className='header'>
        <h1>My Anime List</h1>
        <div className='search-box'>
          <input type='search' placeholder='search here'
          onChange={(e)=> setSearch(e.target.value)}/>

        </div>

      </div>

      <div className='container'>
        <div className='animeInfo'>
          {animeIfo && <AnimeInfo animeIfo={animeIfo}/>}

        </div>

        <div className='anime-row'>
          <h2 className='text-heading'>Anime</h2>
        <div className='row'>
          <AnimeList animelist= {animeData} setAnimeIfo={setAnimeIfo}
         />


        </div>

      </div>

      </div>



    </>
  )
}

export default App