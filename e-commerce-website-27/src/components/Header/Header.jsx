import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

  const navigation = [
    {
      name: 'Name',
      path: "/"
    },
    {
      name: 'Category',
      path: "/category"
    },
   
  ]

  return (
    <header className="text-gray-400  bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <Link to="/" className="flex cursor-pointer title-font font-medium items-center text-white mb-4 md:mb-0">
          <div classname="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
           <span className="ml-3 text-xl">Tailblocks</span>
          </div>
          
        </Link>
        {/* <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="#first" className="mr-5 hover:text-white">First Link</a>
          <a href="#second" className="mr-5 hover:text-white">Second Link</a>
          <a href="#third" className="mr-5 hover:text-white">Third Link</a>
          <a href="#fourth" className="mr-5 hover:text-white">Fourth Link</a>
        </nav> */}


        <div>
        {
          navigation.map((navigate) => {
            return(
             <Link  to={navigate.path}>{navigate.name}</Link>
            )
          })
        }
       
        </div>
      </div>
    </header>
  )
}

export default Header