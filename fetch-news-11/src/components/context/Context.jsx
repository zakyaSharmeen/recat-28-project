// import React, { useContext, useReducer } from 'react'

// // create-context
// const AppContext = React.createContext();




// // provider
// const AppProvider = ({children}) =>{

//     // usereducer
//     const [state, dispatch] = useReducer(reducer, initialState)

//     return(
//         <AppContext.Provider value="zakya is great">
//             {children}
//         </AppContext.Provider>
//     )
// }

// // custom hook
// const useGlobalContext = () =>{
//     return useContext(AppContext)
// }


// export{
//     AppContext, AppProvider, useGlobalContext
// }



import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './Reducer';
let API = "http://hn.algolia.com/api/v1/search?";


const initialState = {
    isLoading: true,
    query: "HTML",
    nbPages: 0,
    page: 0,
    hits: []
}


const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    
    const [state, dispatch] = useReducer(reducer, initialState)


    const fetchApi = async (url) =>{

        dispatch({  type: "SET_LOADING"})

      
        try{
            const res = await fetch(url)
            const data = await res.json();
            console.log(data);
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                }
            })

        }catch(error){
            console.log(error);
            
        }
        

    }

    // to remove 
    const removePost = (post_ID) =>{
        dispatch ({type: "REMOVE_POST", payload: post_ID})
    }

    const searchPost = (searchQuery) =>{
        dispatch ({type: "SEARCH_QUERY", payload: searchQuery})
    }

    // getPrevPage, getNextPage
    const getNextPage = () =>{
        dispatch ({type: "NEXT_PAGE"})
    }
    const getPrevPage = () =>{
        dispatch ({type: "PREV_PAGE"})
    }

   


    useEffect(() =>{
        fetchApi(`${API}query=${state.query}&page=${state.page}`)
    }, [state.query, state.page])

    return(
        <AppContext.Provider value={{...state, removePost, searchPost,getNextPage,getPrevPage}}>
            {children}
        </AppContext.Provider>
    )
}

// custom hook
const useGlobalContext = () =>{
    return useContext(AppContext)
}


export{
    AppContext, AppProvider, useGlobalContext
}