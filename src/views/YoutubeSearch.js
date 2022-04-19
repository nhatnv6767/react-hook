import React from 'react'
import './Blog.scss';
import axios from 'axios';
import { useState, useEffect } from 'react'
import moment from 'moment'

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
                        className="ifram-yt"
                        src="https://www.youtube.com/embed/b4e2sTKF0w0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    >

                    </iframe>
                </div>

                <div className="right">

                    <div className="title">
                        So Sánh Sức Mạnh Laptop DDR5 Với DDR4, Tại Sao Đây MUX Switch Và DDR5 PHẢI CÓ Trên Laptop Asus 2022
                    </div>
                    <div className="created-at">
                        Created At: {moment('2022-04-19T04:43:17Z').format('DD-MM-YYYY HH:mm:ss')}
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