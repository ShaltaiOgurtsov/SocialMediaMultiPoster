import facebook from "@/assets/icons/social-media/facebook-2.png"
import github from "@/assets/icons/social-media/github.png"
import instagram from "@/assets/icons/social-media/instagram-2.png"
import youtube from "@/assets/icons/social-media/youtube.png"
import substack from "@/assets/icons/social-media/substack.png"

import plus from "@/assets/icons/menuItems/plus.png"

import examplePhoto1 from "@/assets/icons/menuitems/photoExample1.webp"
import examplePhoto2 from "@/assets/icons/menuitems/photoExample2.webp"



const socialMedia = [
    {   photo: facebook, alt: 'facebook-image' },
    {   photo: github, alt: 'github-image' },
    {   photo: instagram, alt: 'instagram-image' },
    {   photo: youtube, alt: 'youtube-image' },
    {   photo: substack, alt: 'substack-image' },
]

const plusIcon = {  photo: plus, alt: 'plus'  }

const exaplePhotos = [
    {   photo: examplePhoto1, alt: 'example1'},
    {   photo: examplePhoto2, alt: 'example2'}
]


export function TexterForm(){
    return (
        <>
            <div className="standardCard">
                <p className="texterHeadings"> SocialMedia: </p>
                <div className="socialMediaWheel">
                    {
                        socialMedia.map((item) => (
                            <img className="socialMediaIcon" src={item.photo} alt={item.alt}/>
                        ))
                    }
                    <img className="plusIcon" src={plusIcon.photo} alt={plusIcon.alt}/>
                </div>
            </div>
            <div className="texterCardDown">
                <div className="texterInput">

                    <p className="texterHeadings">Title: </p>
                    <input className="titleInput" placeholder="Title..."/>

                    <p className="texterHeadings">Text: </p>
                    <textarea className="textAreaInput" placeholder="Text..." rows={6}/>

                    <p className="texterHeadings">Tags: </p>
                    <p>#<input placeholder="Tag..." className="hashTagInput"/></p>
                    <p>#<input placeholder="Tag..." className="hashTagInput"/></p>

                    <p className="texterHeadings">Related photos: </p>
                    <div className="imagePosterWrapper">
                        {
                            exaplePhotos.map((item) => (
                                <img className = "uploadImagePhoto" src={item.photo} alt = {item.alt}/>
                            ))
                        }
                        {
                            <label className="photoUploader">
                                {plus ? (
                                    <img src={plus} alt="uploaded" className="uploadedPreview" />
                                ) : (
                                    <span>+ AddPhoto</span>
                                )}
                            </label>
                        }
                    </div>

                    <div className="texterButtons">
                        <button className="buttonSimple">SetupTimer</button>
                        <button className="buttonHighlighted">Post now</button>
                    </div>
                </div>
                
            </div>
        </>
    )
};