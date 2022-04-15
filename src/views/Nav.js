import React from 'react'
import './Nav.scss'

function Nav() {
    return (
        <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href="/timer">Timer Apps</a>
            <a href="/todo">Todo Apps</a>
            <a href="/secret">Secret</a>
        </div>
    )
}

export default Nav