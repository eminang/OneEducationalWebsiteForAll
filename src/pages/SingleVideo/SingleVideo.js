import React from 'react'
import './SingleVideo.css'

function SingleVideo() {
    return (
        <div className="video__player--container">
            <h1 className="video__player--head" >Change your channel | Mallence Bart-Williams | TEDxBerlinSalon</h1>
            <iframe 
                className="video__player" 
                src="https://www.youtube.com/watch?v=AfnruW7yERA&t=105s" 
                allowFullScreen
            >
            </iframe>
        </div>
    )
}

export default SingleVideo
