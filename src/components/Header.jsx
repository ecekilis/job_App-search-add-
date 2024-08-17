import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header>
            <h2>Is Takip</h2>
            <nav>
                <NavLink to={"/"}>Is Listesi</NavLink>
                <NavLink to={"/new"}>Is Ekle</NavLink>
            </nav>
        </header>
    )
}

export default Header
