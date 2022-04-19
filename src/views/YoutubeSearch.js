import React from 'react'
import './Blog.scss';
import axios from 'axios';
import { useState, useEffect } from 'react'

function YoutubeSearch() {

    const [videos, setVideos] = useState([])

    useEffect(() => {

        // component vừa mount xong thì sẽ gọi useEffect nếu để dependence là []
    }, [])

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