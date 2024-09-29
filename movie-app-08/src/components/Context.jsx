import React, { useContext, useEffect, useState } from "react";

// const API_URL = `https://www.omdbapi.com/?apikey=1e2d3622&s=titanic`;

// using env
// const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=titanic`;

// using dynamically
export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;




// create context
const AppContext = React.createContext();


// create provider
const AppProvider = ({children}) =>{

  const [isLoading, setIsloading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({show: "false", msg: ""});

  // search functionality
  const [query, setQuery] = useState("titanic");

  

  const getMovies = async (url) =>{
    setIsloading(true);
    try{
      
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      
   

      if(data.Response === "True"){
        setIsloading(false)
        setIsError({
          show: false,
          msg: "",
        })
        setMovie(data.Search)
      }
      else{
        setIsError({
          show: true,
          msg: data.Error,
        })
      }
      

    }catch(error){
      console.log(error);
      

    }

  }


  // here using setTimeout and clear time out to send the data after few seconds which will stop the  multiple calling of half typed movie name

  useEffect(()=>{
    let timeOut =  setTimeout(() =>{
      getMovies(`${API_URL}&s=${query}`)

    }, 500);
    return () => clearTimeout(timeOut)

  },[query])
  
  // useEffect(()=>{
    
  //     getMovies(`${API_URL}&s=${query}`)
  // },[query])


  return <AppContext.Provider value={{isError, isLoading, movie,query, setQuery}}>{children}</AppContext.Provider>
}



// just a differnet method to create custom hook

const useGlobaltext = ()=>{
  return useContext (AppContext)
}

export {AppProvider,AppContext, useGlobaltext}