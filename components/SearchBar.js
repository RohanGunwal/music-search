import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
    return (
        <div className="searchBar_container">
            <input className="text w-100 p-3 " type="text" placeholder="Search Songs, Artists and Albums" onChange={props.takeInput}></input>
            <button className="btn btn-primary shadow" onClick={props.btClick}>Search Now</button>
        </div>
    )
}

export default SearchBar
