import photoExample from "@/assets/icons/menuitems/walt_bismark.jpg"
import arrow from "@/assets/icons/menuitems/down-arrow.png"

import textIcon from "@/assets/icons/menuitems/align-left.png"
import videoIcon from "@/assets/icons/menuitems/video-camera.png"
import shortVideoIcon from "@/assets/icons/menuitems/tik-tok.png"
import exitIcon from "@/assets/icons/menuitems/exit.png"

import facebookIcon from "@/assets/icons/social-media-icons/facebook-app-symbol.png"
import githubIcon from "@/assets/icons/social-media-icons/github-2.png"
import instagramIcon from "@/assets/icons/social-media-icons/github-2.png"
import twitterIcon from "@/assets/icons/social-media-icons/github-2.png"
import youtubeIcon from "@/assets/icons/social-media-icons/github-2.png"



import { useState } from "react"
import { useNavigate } from "react-router-dom"

const photos = { photo: photoExample, alt: 'example-media'}

const downArrow = { photo: arrow, art: 'down-arrow'}

const initialSocialMediaPopup = [
    {icon: facebookIcon, alt: 'facebook-icon', name: 'Facebook'},
    {icon: instagramIcon, alt: 'instagram-icon', name: 'Instagram'},
    {icon: twitterIcon, alt: 'twitter-icon', name: 'Twitter'},
    {icon: youtubeIcon, alt: 'youtube-icon', name: 'Facebook'},
    {icon: githubIcon, alt: 'github-icon', name: 'Github'},
]




export function TopBar(){
    const navigate = useNavigate()

    const loginRedirect = () => {
        navigate('/login')
    }

    const dropdownMenuItems = [
        {   photo: textIcon, button: `TextPresets: `, alt: "text-icon"},
        {   photo: videoIcon, button: `VideoPresets: `, alt: "video-icon"},
        {   photo: shortVideoIcon, button: `ShortVideoPresets: `, alt: "shortVideo-icon"}
    ]
    const[account, openAccount] = useState(false);

    const toggleAccount = () => openAccount(!account)
    return (
        <div className="topBar">
            <h2>AppName</h2>
            <div className="accountButtonContainer">
                <button className="buttonHighlighted">+CreateNewPreset</button>
                <div className="accountWrapper">
                    <p className="accountName">Name </p>
                    <img className = "photoIcon" src = {photos.photo} alt = {photos.alt}/>
                    <div className="arrowDownContainer" onClick={toggleAccount}>
                        <img className="accountArrowDown" src = {downArrow.photo} alt={downArrow.alt} />
                    </div>
                    
                    {account && (
                        <div className="dropdownMenu">
                            <div className="infoBar">
                                {
                                    dropdownMenuItems.map((item) => (
                                        <div className="dropdownMenuItem">
                                            <div className="dropdownIconWrapper">
                                                <img src={item.photo} alt={item.alt} className="dropdownMenuIcon"/>
                                                <p className="dropdownMenuText">{item.button}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="dropdownMenuItem">
                                <div className="exitIconWrapper" onClick={() => {loginRedirect()}}>
                                    <img src={exitIcon} alt='exit-icon' className="dropdownMenuIcon"/>
                                    <p className="dropdownMenuText">Exit</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};