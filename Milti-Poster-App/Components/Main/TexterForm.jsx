import facebook from "@/assets/icons/social-media/facebook-2.png"
import github from "@/assets/icons/social-media/github.png"
import instagram from "@/assets/icons/social-media/instagram-2.png"
import youtube from "@/assets/icons/social-media/youtube.png"
import substack from "@/assets/icons/social-media/substack.png"

import plus from "@/assets/icons/menuItems/plus.png"
import upload from "@/assets/icons/menuItems/upload.png"

import close from "@/assets/icons/menuItems/close.png"

import examplePhoto1 from "@/assets/icons/menuitems/photoExample1.webp"
import examplePhoto2 from "@/assets/icons/menuitems/photoExample2.webp"
import { useState } from "react"
import { Modal } from "./Modal"


const photoLimit = 4;



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

const initialPhotos = [
    {   photo: examplePhoto1, alt: 'example1'},
    {   photo: examplePhoto2, alt: 'example2'}
]


export function TexterForm(){

    //Popup modal
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


    //UploadedPhotos
    const[examplePhotos, setExamplePhotos] = useState(
        initialPhotos.map((item, index) => ({...item, id: index}))
    );

    const handleRemovePhotos = (id) => {
        setExamplePhotos((prev) => prev.filter((item) => item.id !== id))
    };

    const handleUploadPhotos = (event) => {
        const files = Array.from(event.target.files)

        if (files.length === 0) return;

        const newPhotos = files.map((file) => ({
            id: crypto.randomUUID(),
            photo: URL.createObjectURL(file),
            alt: file.name,
        }));

        setExamplePhotos((prev) => [...prev, ...newPhotos])
        event.target.value = "";
    };




    return (
        <>

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
                            examplePhotos.map((item) => (
                                <div className="imageWrapper">
                                    <div className="closer" onClick={() => handleRemovePhotos(item.id)}>
                                        <img src={close} alt='closed-icon' className="closerIcon"/>
                                    </div>
                                    <img className = "uploadImagePhoto" src={item.photo} alt = {item.alt}/>
                                </div>
                            ))
                        }
                        {examplePhotos.length < photoLimit &&
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
                                    onChange={handleUploadPhotos}
                                    style={{display: 'none'}}
                                />
                            </div>
                        }
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
        </>
    )
};