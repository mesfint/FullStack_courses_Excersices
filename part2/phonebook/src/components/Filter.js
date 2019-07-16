
import React from 'react'

export default function Filter({handleFilter, search}) {

    
    return (

        <div className="search">
        Search By Name:
          <input
            className="searchInput"
            type="text"
            value={search}
            onChange={handleFilter}
          />
          </div>
    )
}
