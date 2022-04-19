import React from 'react'
import './Blog.scss';

function YoutubeSearch() {
    return (
        <div className="youtube-search-container">
            <div className="yt-search">
                <input type="text" placeholder="Search" />
                <button type="button">Search</button>
            </div>
        </div>
    )
}

export default YoutubeSearch