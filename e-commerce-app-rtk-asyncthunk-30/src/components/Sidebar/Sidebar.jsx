import React, { useEffect } from 'react'
import "./sidebar.scss"
import { getSidevarStatus, setSidebarOff } from '../../store/sidebarSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAsyncCategories, getAllCategories } from '../../store/categorySlice'

function Sidebar() {

    const dispatch = useDispatch()
    const isSidebarOn = useSelector(getSidevarStatus)

    const categories = useSelector(getAllCategories);
    useEffect(() =>{
      dispatch(fetchAsyncCategories())

    }, [dispatch])



  return (
    <aside className={`sidebar ${isSidebarOn ? "hide-sidebar" : ""}`}>
      <button type = "button" className='sidebar-hide-btn' 
      onClick={() => dispatch(setSidebarOff())}
      >
        <i className='fas fa-times'></i>
      </button>
      <div className='sidebar-cnt'>
        <div className='cat-title fs-17 text-uppercase fw-6 ls-1h'>All Categories</div>
        <ul className='cat-list'>
            {
              categories.map((category, idx) =>{
                return (
                  <li onClick={() => dispatch(setSidebarOff())}>
                  <Link to = {`category/${category}`} className='cat-list-link text-capitalize'>{category.name}</Link>
                  </li>
                )
              })
            }
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar