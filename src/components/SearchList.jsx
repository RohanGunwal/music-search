import React from 'react';
import './SearchList.css';
import Audio from './Audio';

function SearchList(props) {
    return (
        <div className="display_audio text-center">
            <p className="list text-center m-3">List of Records : {props.songdata.length}</p>
            {props.songdata.map(ele => <Audio url={ele.previewUrl} name={ele.trackName} img={ele.artworkUrl100}/>)}
        </div>
    )
}

export default SearchList
