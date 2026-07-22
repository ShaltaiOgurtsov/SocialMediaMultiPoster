
import infoIcon from "@/assets/icons/menuitems/info.png"

import upwardArrow from "@/assets/icons/menuitems/upward-arrow.png"
import downArrow from "@/assets/icons/menuitems/down-arrow.png"

import plus from "@/assets/icons/menuitems/plus.png"

const arrows = [
    {   photo: downArrow, alt: 'down-arrow' },
    {   photo: upwardArrow, alt: 'upward-arrow' }
]




export function Sidebar({menuItems, changeWorkspace}){

    console.log(`Change workspace: ${changeWorkspace}`);
    

    return (
        <div className="sidebar">
            <div>
                <div className="sidebarSearch">
                    <input placeholder="Search..." />
                </div>
                {
                    menuItems.map((item) => (
                        <div className="submenuCluster">
                            <div className="sidebarButton" onClick={item.toggleFunction}>
                                <div className="buttonImager">
                                    <img className="sidebarImage" src= {item.icon} alt = {item.name}/>
                                    <p className="sidebarText">{item.button}</p>
                                </div>
                                <img className="sidebarArrow" src={item.isToggled ? arrows[0].photo : arrows[1].photo} alt = {item.isToggled ? arrows[0].alt : arrows[1].alt}/>
                            </div>    
                                {!item.isToggled && (
                                    <div className="sidebarSubmenu">
                                        <div className="sidebarSubmenuButton" onClick={() => changeWorkspace(item.form)}>
                                            <p>NoPreset</p>
                                        </div>
                                        <div className="sidebarSubmenuButton" onClick={() => changeWorkspace(item.form)}>
                                            <img src={plus} alt="Add new preset" className="addNewPreset"/>
                                        </div>
                                    </div>
                                )}
                        </div>
                    ))
                }

                <div className="submenuCluster">
                            <div className="sidebarButton">
                                <div className="buttonImager">
                                    <img className="sidebarImage" src= {infoIcon} alt = 'info-icon'/>
                                    <p className="sidebarText">Info</p>
                                </div>
                            </div>    
                        </div>
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