import React from "react"
import { Link } from "react-router-dom"

const SocialMediaLinkIcon = ({ to, alt, img }) => {
    return (
        <Link to={{ pathname: to }}
            target="_blank" >
            <img alt={alt} src={img} height="23" width="23" />
        </Link >
    )
}

export default SocialMediaLinkIcon
