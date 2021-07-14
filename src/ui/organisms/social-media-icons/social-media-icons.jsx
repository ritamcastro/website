import React from "react"
import SocialMediaLinkIcon from "../../molecules/social-media-link-icon/social-media-link-icon"
import "./social-media-icon.scss"

const SocialMediaIcons = () => {
    return (
        <div className="social-media-icons">
            < SocialMediaLinkIcon
                to="mailto:send.an.email.to.ritamcastro@gmail.com"
                alt="E-mail me"
                img="public/images/gmail-dark.svg" />

            <SocialMediaLinkIcon
                to="https://github.com/ritamcastro"
                alt="See my code"
                img="public/images/github-dark.svg" />

            <SocialMediaLinkIcon
                to="https://www.linkedin.com/in/ritamcastro/"
                alt="Follow my work"
                img="public/images/linkedin-dark.svg" />
        </div >
    )
}

export default SocialMediaIcons