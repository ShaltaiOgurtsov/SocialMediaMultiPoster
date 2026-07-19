import photoExample from "@/assets/icons/menuitems/walt_bismark.jpg"
import arrow from "@/assets/icons/menuitems/down-arrow.png"

const photos = { photo: photoExample, alt: 'example-media'}

const downArrow = { photo: arrow, art: 'down-arrow'}


export function TopBar(){
    return (
        <div className="topBar">
            <h2>AppName</h2>
            <div className="accountButtonContainer">
                <button className="buttonHighlighted">+CreateNewPreset</button>
                <div className="accountWrapper">
                    <p className="accountName">Name </p>
                    <img className = "photoIcon" src = {photos.photo} alt = {photos.alt}/>
                    <img className="accountArrowDown" src = {downArrow.photo} alt={downArrow.alt} />
                </div>
            </div>
        </div>
    )
};