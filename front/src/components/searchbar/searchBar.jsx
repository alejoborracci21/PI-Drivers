import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../../redux/actions";
import './searchBar.css'


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch()

    const handleChange = (event) => {
        const {value} = event.target;
        setSearchTerm(value)
        dispatch(search(value))
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
        </div>
    )
}


export default SearchBar;