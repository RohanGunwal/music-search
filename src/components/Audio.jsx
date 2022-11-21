import React from 'react'
import './Audio.css';

function Audio(props) {
    return (
        <div className="card audio_div">
            <img src={props.img} alt="" className="card_img card-img-top"/>
            <h3 class="card-title">{props.name}</h3>
            <audio className="card-text" controls autoplay src={props.url}>
            </audio>
        </div>
    )
}

export default Audio
