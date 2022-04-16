import React from 'react'
import './Nav.scss'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div className="topnav">
            <NavLink activeClassName="activeNav" to="/">Home</NavLink>
            <NavLink activeClassName="activeNav" to="/timer">Timer Apps</NavLink>
            <NavLink activeClassName="activeNav" to="/todo">Todo Apps</NavLink>
            <NavLink activeClassName="activeNav" to="/secret">Secret</NavLink>
        </div>
    )
}

// khi dùng Link nó sẽ cancel request gửi lên server
// tức là hành động mặc định của thẻ a sẽ gửi 1 request lên phía server

// NavLink để set cái class active vào

export default Nav