import React from "react"
import { Link } from "react-router-dom"
import MenuItem from "../../atoms/menu-item/menu-item"
import "./header.scss"

const Header = () => {
    return (
        <header>
            <Link to="/">
                <img alt="Home" src="public/images/mandala.png" height="42" width="42" />
            </Link>

            <MenuItem to="blog">Blog</MenuItem>
            <MenuItem to="about">About</MenuItem>
        </header>
    )
}

export default Header
