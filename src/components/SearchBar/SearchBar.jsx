import React, { useState } from 'react'
import { useStarWars } from '../../context/StarWarsContext'

function SearchBar() {
    const {handleInputChange, onSubmitHandler, search} = useStarWars();
  return (
    <form className="search-bar--form" >
        <input
          className="search-bar--input"
          type="search"
          placeholder="Search for a starship..."
          value={search}
          onChange={handleInputChange}
          required
        />
        <button onClick={onSubmitHandler} type="submit" className="search-bar--button">
          Search
        </button>
      </form>
  )
}

export default SearchBar