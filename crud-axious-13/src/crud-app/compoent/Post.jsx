import React, { useEffect, useState } from 'react'
import { deletePost, getPost } from '../PostApi'
import "../../App.css"
import Form from './Form'

function Post() {

  const[data, setData] = useState([])
  const [updateDataApi, setUpdateDataApi] = useState({})



//   to display the data
    const getPostData =  (async () => {
         const res = await getPost()
         setData(res.data)
    })
     
    useEffect(() =>{
    getPostData()
    },[])

    // to delete
    const handleDeletePost = async (id) =>{
      
       try{
        const res = await deletePost(id);
        // console.log(res);
        if(res.status === 200){
            const newUpdatedPosts = data.filter((curPost) =>{
                return curPost.id !== id;
            })
            setData(newUpdatedPosts)
        }





       }
       catch(errro){
        console.log(errro);
        

       }
        
    }


    // to update
    const handleUpdatePost =  (curElerm) => setUpdateDataApi(curElerm)

















     
  return (
    <>
    <section className='section-form'> 
        <Form data={data} setData={setData} updateDataApi={updateDataApi} setUpdateDataApi= {setUpdateDataApi}/>
    </section>


    <section className='section-post'>


       <ol>
            {
                data.map((curElerm) => {
                    const {id, body, title} = curElerm;

                    return(
                        <li key={id}>
                            <p>Tile: {title}</p>
                            <p>Body: {body}</p>
                            <button onClick={() => handleUpdatePost(curElerm)}>EDIT</button>
                            <button className='btn-delete' onClick={() => handleDeletePost(id)}>DELETE</button>

                        </li>
                    )
                })
            }
        </ol>
       

    </section>


    </>
  )
}

export default Post