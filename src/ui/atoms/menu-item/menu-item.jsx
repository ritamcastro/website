import React from "react"
import { Link } from "react-router-dom"
import "./menu-item.scss"

const MenuItem = ({ to, children }) => {
    return (
        <Link className="menu-item" to={to}>
            {children}
        </Link>
    )
}

export default MenuItem