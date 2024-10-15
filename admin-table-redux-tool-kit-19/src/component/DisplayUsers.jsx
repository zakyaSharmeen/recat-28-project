import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../store/slice/UserSlice';

function DisplayUsers() {

    const dispatch = useDispatch()

    const data = useSelector((state) =>{
        return state.users;

    })

    const deleteUser = (id) =>{
        dispatch(removeUser(id))
    }

    console.log(data);
    
  return (
    <div>
       {
        data.map((user, id) =>{
            return (
                <div>
                    <li key={id}>
                    <div className='display-flex'>
                    <p>{user}</p>
                    <button className='btn-delete delete-button' onClick={() => deleteUser(id)}>DELETE</button>
                    </div>
            </li>
                </div>
            )

        })
       }
    </div>
  )
}

export default DisplayUsers