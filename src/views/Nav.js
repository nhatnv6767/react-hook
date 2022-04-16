import React from 'react'
import './Nav.scss'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="topnav">
            <Link className="active" to="/">Home</Link>
            <Link to="/timer">Timer Apps</Link>
            <Link to="/todo">Todo Apps</Link>
            <Link to="/secret">Secret</Link>
        </div>
    )
}

// khi dùng Link nó sẽ cancel request gửi lên server
// tức là hành động mặc định của thẻ a sẽ gửi 1 request lên phía server

export default Nav