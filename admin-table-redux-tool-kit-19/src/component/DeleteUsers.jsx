import React from "react";
import {useDispatch} from "react-redux"
import {clearAllUsers} from "../store/slice/UserSlice"



export const DeleteUsers = () => {
  const dispatch = useDispatch()


  const deleteUsers = () =>{
    console.log("hii");
    dispatch(clearAllUsers())
    
  }


  return (
    <div>
      <button className="delete-button" onClick={deleteUsers}>clear All Users</button>
    </div>
  )
};