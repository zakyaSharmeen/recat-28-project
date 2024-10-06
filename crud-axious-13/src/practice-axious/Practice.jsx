import { useEffect, useState } from 'react';
import axios from 'axios';


const API = "https://jsonplaceholder.typicode.com";

function Practice() {

  const [myData, setMyData] = useState([])
  const [error, setError] = useState("")



  // using promises- .then
  // useEffect(() =>{
  //   axios
  //   .get("https://jsonplaceholder.typicode.com/posts")
  //   .then((res) => {
  //     setMyData(res.data)

      
  //   })
   
  //   .catch((error) => {
  //     setError(error.message)
  //   });
    
  // },[])



  // async await
  const getApiData =  (async () => {
   try{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(res.data);
  setMyData(res.data)  
   }catch(error){
    setError(error.message)
   }  
  })

  useEffect(() =>{
    getApiData()
  },[])


  // effective method---by create a base api hold called const API 
//    const getApiData =  (async (url) => {
//    try{
//     const res = await axios.get(url)
//     console.log(res.data);
//   setMyData(res.data)  
//    }catch(error){
//     setError(error.message)
//    }  
//   })


//   useEffect(() =>{
//     getApiData(`${API}/posts`)
//   })


  return (
    <>
    <h1>hii zakya u did u</h1>
    {error !== "" && <h2>{error}</h2>}
    .<div className='grid'>
      {
        myData.slice(0, 20).map((post) =>{

          const {id, title,body} = post


          return(
              <div key={id}>
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
          )
        })
      }
      
    </div>
    </>
  );
}

export default Practice;
