import React from "react";
import { useState } from "react";



const SearchBar = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    
    const handleClick = () => {
        if (searchTerm.trim() !== '') {
            onSearch(searchTerm.trim());
            setSearchTerm('');
            console.log(searchTerm)
          } else {
            setErrorMessage('Ingresa un nombre válido');
          }
    }
    const handleChange = (event) => {
        const {value} = event.target;
        setSearchTerm(value)
        setErrorMessage('')
    }
    return(
        <div>
            <h1>Search driver by name:</h1>
            <input
            type='text'
            value={searchTerm}
            onChange={handleChange}
            className="search-input"
            />
            <button
            onClick={handleClick}
            className="search-button"
            >
            Search
            </button>
        </div>
    )
}


export default SearchBar;