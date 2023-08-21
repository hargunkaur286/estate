import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="flexCenter search flex">
                    <div> 
                        <HiLocationMarker className="location-icon" color="#28a0cc" size={25} />
                    </div>
                    <div>
                        <input className="search-bar" type="text" />
                    </div>
                    <div>
                        <button className='button'>Search</button>
                    </div>
                </div>
  )
}

export default SearchBar
