import React from "react"
import SocialMediaIcons from "../../organisms/social-media-icons/social-media-icons"
import "./home.scss"

const Home = () => {
    return (
        <div className="business-card">
            <img className="headshot" alt="Rita looks like this." src="public/images/headshot.png" />

            <div className="info">
                <p className="name">Rita Castro</p>
                <p className="title">Software Developer</p>

                <SocialMediaIcons />

            </div>
        </div>
    )
}

export default Home