import textIcon from "@/assets/icons/menuitems/align-left.png"
import videoIcon from "@/assets/icons/menuitems/video-camera.png"
import shortVideoIcon from "@/assets/icons/menuitems/tik-tok.png"
import infoIcon from "@/assets/icons/menuitems/info.png"

import upwardArrow from "@/assets/icons/menuitems/upward-arrow.png"
import downArrow from "@/assets/icons/menuitems/down-arrow.png"
import { useState } from "react"

const arrows = [
    {   photo: downArrow, alt: 'down-arrow' },
    {   photo: upwardArrow, alt: 'upward-arrow' }
]




export function Sidebar(){
    const [textMessenger, setTextMessenger] = useState(true)
    const [videoMessenger, setVideoMessenger] = useState(true)
    const [shortVideoMessenger, setShortVideoMessenger] = useState(true);
    const [infoPage, setInfoPage] = useState(true);

    const toggleTextMessenger = () => setTextMessenger(!textMessenger)
    const toggleVideoMessenger = () => setVideoMessenger(!videoMessenger)
    const toggleShortVideoMessenger = () => setShortVideoMessenger(!shortVideoMessenger)
    const toggleInfoPage = () => setInfoPage(!infoPage)

    const menuItems = [
        {   button: 'Text Presets', name: 'textIcon', icon: textIcon, toggleFunction: toggleTextMessenger, isToggled:  textMessenger   },
        {   button: 'Video Presets', name: 'videoIcon', icon: videoIcon, toggleFunction: toggleVideoMessenger, isToggled:   videoMessenger   },
        {   button: 'Stories Presets', name: 'shortVideoIcon', icon: shortVideoIcon, toggleFunction: toggleShortVideoMessenger, isToggled:  shortVideoMessenger  },
        {   button: 'Info', name: 'infoIcon', icon: infoIcon, toggleFunction: toggleInfoPage, isToggled:  infoPage  }
    ]

    return (
        <div className="sidebar">
            <div>
                <div className="sidebarButton">
                    <input placeholder="Search..." />
                </div>
                {
                    menuItems.map((item) => (
                        <div className="sidebarButton" onClick={item.toggleFunction}>
                            <div className="buttonImager">
                                <img className="sidebarImage" src= {item.icon} alt = {item.name}/>
                                <p className="sidebarText">{item.button}</p>
                            </div>
                            <img className="sidebarArrow" src={item.isToggled ? arrows[0].photo : arrows[1].photo} alt = {item.isToggled ? arrows[0].alt : arrows[1].alt}/>
                        </div>
                    ))
                }
            </div>
            <div className="contactPage">
                <p>Contact information</p>
                <div >
                    <image />
                    <p>waltbismark@gmail.com</p>
                </div>
            </div>
        </div>
    )
}