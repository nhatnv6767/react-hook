import React from 'react'
import './Blog.scss';
import axios from 'axios';
import { useState, useEffect } from 'react'

function YoutubeSearch() {

    const [videos, setVideos] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {

        // component vừa mount xong thì sẽ gọi useEffect nếu để dependence là []
    }, [])

    return (
        <div className="youtube-search-container">
            <div className="yt-search">
                <input type="text" placeholder="Search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <button type="button">Search</button>
            </div>

            <div className="yt-result">
                <div className="left">
                    <iframe
                        width="841"
                        height="473"
                        src="https://www.youtube.com/embed/0ZTj2DNtLs0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    >

                    </iframe>
                </div>

                <div className="right">

                    <div className="title">

                    </div>
                    <div className="created-at">

                    </div>
                    <div className="author">

                    </div>
                    <div className="description">

                    </div>

                </div>


            </div>
        </div>
    )
}

export default YoutubeSearch