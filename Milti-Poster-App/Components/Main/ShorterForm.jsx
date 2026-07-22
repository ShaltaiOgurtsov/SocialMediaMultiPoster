import facebook from "@/assets/icons/social-media/facebook-2.png"
import github from "@/assets/icons/social-media/github.png"
import instagram from "@/assets/icons/social-media/instagram-2.png"
import youtube from "@/assets/icons/social-media/youtube.png"
import substack from "@/assets/icons/social-media/substack.png"

import plus from "@/assets/icons/menuItems/plus.png"
import upload from "@/assets/icons/menuItems/upload.png"

import close from "@/assets/icons/menuItems/close.png"

import { useState } from "react"
import { Modal } from "./Modal"

const initialSocialMedia = [

    
]




const storedSocialMedia = [
    {   photo: facebook, alt: 'facebook-image', selected: false },
    {   photo: github, alt: 'github-image', selected: false },
    {   photo: instagram, alt: 'instagram-image', selected: false },
    {   photo: youtube, alt: 'youtube-image', selected: false },
    {   photo: substack, alt: 'substack-image', selected: false },
]

const plusIcon = {  photo: plus, alt: 'plus' }

export function ShorterForm(){

     const [modalOpen, setModalOpen] = useState(false)
    
    //ReservedSocialMedia
    const [reservedSocialMedia, setReservedSocialMedia] = useState(
        storedSocialMedia.map((item, index) => ({...item, id: index}))
    );

    const toggleReversedSocialMedia = (id) => {
        setReservedSocialMedia((prev) => 
            prev.map((item) => 
                item.id === id ?
                    {...item, selected: !item.selected  } : 
                    item   
            )
        )
    }

    //SocialMedia
    const[socialMedia, setSocialMedia] = useState(
        initialSocialMedia.map((item, index) => ({...item, id: index}))
    );

    const handleRemoveSocialMedia = (id) => {
        const additionalSocialMedia = socialMedia.filter(
            (item) => item.id === id
        )

        setReservedSocialMedia((prev) => [...prev, ...additionalSocialMedia])
        setSocialMedia((prev) => prev.filter((item) => item.id !== id))
    };

    const selectSocialMedia = () => {
        const additionalSocialMedia = reservedSocialMedia.filter(
            (item) => item.selected === true
        ).map((item) => ({ ...item, selected: false }));

        setSocialMedia((prev) => [...prev, ...additionalSocialMedia])
        setReservedSocialMedia((prev) => prev.filter((item) => item.selected === false))
        setModalOpen(false)
    };

    return(
        <div>
            <div className="texterCardDown">
                 <div className="texterInput">
                    <h2>Shorter form</h2>
                    <p className="texterHeadings">Title: </p>
                    <input className="titleInput" placeholder="Title..."/>

                    <p className="texterHeadings">Description: </p>
                    <textarea className="textAreaInput" placeholder="Description..." rows={6}/>

                    <p className="texterHeadings">Tags: </p>
                    <p>#<input placeholder="Tag..." className="hashTagInput"/></p>
                    <p>#<input placeholder="Tag..." className="hashTagInput"/></p>

                    <p className="texterHeadings">Posted video: </p>
                    <div>
                        <label className="photoUploader" htmlFor="photoInput">
                            {plus ? (
                                <img src={upload} alt="uploaded" className="uploadedPreview" />
                            ) : (
                                <span>+ AddPhoto</span>
                            )}
                        </label>
                        <input 
                            type="file"
                            id = "photoInput"
                            accept="image/*"
                            multiple
                            style={{display: 'none'}}
                        />
                    </div>

                    <p className="texterHeadings"> SocialMedia: </p>
                    <div className="socialMediaWheel">
                        {
                            socialMedia.map((item) => (
                                <div className="socialMediaWrapper" onClick={() => handleRemoveSocialMedia(item.id)}>
                                    <div className="socialMediaClose">
                                        <img src={close} alt="social-media-closer" className="socialMediaCloseIcon"/>
                                    </div>
                                    <img className="socialMediaIcon" src={item.photo} alt={item.alt}/>
                                </div>
                            ))
                        }
                        <div className="plusContainer" onClick={() => setModalOpen(true)}>
                            <img className="plusIcon" src={plusIcon.photo} alt={plusIcon.alt}/>
                        </div>
                    </div>

                    <div className="texterButtons">
                        <button className="buttonSimple">SetupTimer</button>
                        <button className="buttonHighlighted">Post now</button>
                    </div>
                 </div>

                <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                    <p>Chose social media to add: </p>

                    <div className="socialMediaPopupWrapper" >
                        {reservedSocialMedia.length > 0 ? (
                            reservedSocialMedia.map((item) => (
                                <div 
                                    className={item.selected ? "popupSocialMediaWrapperActive" : "popupSocialMediaWrapper"} 
                                    key={item.id} 
                                    onClick={() => toggleReversedSocialMedia(item.id)}
                                >
                                    <img className="popupImageWrapper" src={item.photo} alt={item.alt}/>
                                </div>
                            ))
                        ) : (
                            <p>All social media has been added</p>
                        )}
                    </div>

                    <div className="socialMediaPopupBottomer">
                        <button className="buttonHighlighted" onClick={selectSocialMedia}>Add</button>
                    </div>
                </Modal>
            </div>
        </div>
    )
};