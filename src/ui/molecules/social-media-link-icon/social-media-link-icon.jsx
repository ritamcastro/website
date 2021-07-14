import React from "react"

const SocialMediaLinkIcon = ({ to, alt, img }) => {
    return (
        <a href={to} target="_blank">
            <img alt={alt} src={img} height="23" width="23" />
        </a>
    )
}

export default SocialMediaLinkIcon
