import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import './SearchBar.css';

const SearchBar = ({ filter, setFilter }) => {
  return (
    <div className="flexCenter search flex">
                    <div> 
                        <HiLocationMarker className="location-icon" color="#28a0cc" size={25} />
                    </div>
                    <div>
                        <input className="search-bar" type="text" 
                        placeholder="Search by title/city/country..."
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}/>
                    </div>
                    <div>
                        <button className='button'>Search</button>
                    </div>
                </div>
  )
}

export default SearchBar
