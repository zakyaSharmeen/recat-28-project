import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

// get method
export const getPost = () =>{
    return api.get("/posts")
}


// delete method
export const deletePost = (id) =>{
    return api.delete(`/posts/${id}`)
}

// add method- post
export const postData = (post) =>{
    return api.post("/posts", post)
}


// update method- put
export const updateData = (id,post) =>{
    return api.put(`/posts/${id}`, post)
}