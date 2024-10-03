import React, { useEffect } from 'react'

import { useGlobalContext } from './context/Context'


function Stories() {

    // let API = "http://hn.algolia.com/api/v1/search?query=html";

    // const fetchApi = async (url) =>{
    //     try{
    //         const res = await fetch(url)
    //         const data = await res.json();
    //         console.log(data);
    //     }catch(error){
    //         console.log(error);

    //     }


    // }
    // useEffect(() =>{
    //     fetchApi(API)
    // }, [])







    const { hits, bnPages, isLoading, removePost } = useGlobalContext()

    if (isLoading) {
        return (
            <>
                <h1>Loading........</h1>
            </>
        )
    }
    return (
        <>
            <div className="stories-div">
            {
                hits.map((currPost) => {
                    const {title, author, objectID, url, num_comments} = currPost;

                    return (
                        <>
                        <div className="card" key={objectID}>
                            <h2>{title}</h2>
                            <p>By <span>{}author</span> | {num_comments}</p>
                            <div className="card-button">
                                <a href={url} target='_blank'>Read More</a>
                                <a href="#" onClick={() => removePost(objectID)}>Remove</a>
                            </div>
                        </div>

                        </>
                    )
                })
            }

            </div>
        </>
    )
}

export default Stories