import React, { useEffect, useState } from 'react'
import { postData, updateData } from '../PostApi';

function Form({data, setData, updateDataApi, setUpdateDataApi}) {

    const [addData, setAddData] = useState({
        title: "",
        body: "",
    })



    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prev) => {
           return{
            ...prev,
            [name]: value, 
           }
            
        })
    }


    // to add the post
    const addPostData = async () =>{
       const res = await postData(addData)
       console.log("res",res);
       
       if(res.status === 201 ) {
        setData([...data, res.data])
        setAddData({title: "", body: ""})
       
     }
 
    }

    let isEmpty = Object.keys(updateDataApi).length ===0;


    // updatePostData
    const updatePostData = async () =>{
      
            const res = await updateData(updateDataApi.id, addData)
            console.log(res);
            
            if(res.status === 200 ) {
                setData((prev) =>{
                    return prev.map((curElerm) =>{
                        return curElerm.id === res.data.id ? res.data : curElerm;
    
                    })
    
                })
    
                setAddData({title: "", body: ""})
                setUpdateDataApi({})
               
             }
          
      
            }
        
       
      

    // get the updated data and add into input field
    useEffect(() =>{
        updateDataApi && 
        setAddData({
            title: updateDataApi.title || "",
            body: updateDataApi.body || ""
        })
    },[updateDataApi])





    // for submission
    const handeFormSubmit = (e) =>{
        e.preventDefault();

        const action = e.nativeEvent.submitter.value;
        if(action === "Add"){ addPostData()}
        else if(action === "Edit"){updatePostData()}



        addPostData()
    }





  return (
    <form onSubmit={handeFormSubmit}>
    <div>
      <label htmlFor="title"></label>
      <input
        type="text"
        autoComplete="off"
        id="title"
        name="title"
        placeholder="Add Title"
        value={addData.title}
        onChange={handleInput}
        
       
      />
    </div>

    <div>
      <label htmlFor="body"></label>
      <input
        type="text"
        autoComplete="off"
        placeholder="Add Post"
        id="body"
        name="body"
        value={addData.body}
        onChange={handleInput}
        
      />
    </div>
    <button type="submit" value={isEmpty ? "Add" : "Edit"}>{isEmpty ? "Add" : "Edit"}
      
    </button>
  </form>
  )
}

export default Form