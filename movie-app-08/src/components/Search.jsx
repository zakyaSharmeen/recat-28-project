import React from 'react'
import { useGlobaltext } from './Context'

function Search() {

  const {query, setQuery, isError} = useGlobaltext()
  return (
    <>
    <div className="search-section">
      <h2>Search Your Favarite Movies</h2>
      <form action="">
        <div>
          <input type="text" placeholder='movie name'
          value={query} onChange={(e) => setQuery(e.target.value)}/>
        </div>
      </form>

      <div className="card-error">
        <p>{isError.show && isError.msg}</p>
      </div>
    </div>
    </>
  )
}

export default Search