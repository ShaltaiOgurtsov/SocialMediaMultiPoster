
import { useState } from 'react'




import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'
import { Workspace } from './Workspace'

import textIcon from "@/assets/icons/menuitems/align-left.png"
import videoIcon from "@/assets/icons/menuitems/video-camera.png"
import shortVideoIcon from "@/assets/icons/menuitems/tik-tok.png"

export function General() {
    
  const [textMessenger, setTextMessenger] = useState(true)
  const [videoMessenger, setVideoMessenger] = useState(true)
  const [shortVideoMessenger, setShortVideoMessenger] = useState(true);

  const toggleTextMessenger = () => setTextMessenger(!textMessenger)
  const toggleVideoMessenger = () => setVideoMessenger(!videoMessenger)
  const toggleShortVideoMessenger = () => setShortVideoMessenger(!shortVideoMessenger)

  const menuItems = [
      {   button: 'Text Presets', name: 'textIcon', icon: textIcon, toggleFunction: toggleTextMessenger, isToggled:  textMessenger, form: 0    },
      {   button: 'Video Presets', name: 'videoIcon', icon: videoIcon, toggleFunction: toggleVideoMessenger, isToggled:   videoMessenger, form: 1   },
      {   button: 'Stories Presets', name: 'shortVideoIcon', icon: shortVideoIcon, toggleFunction: toggleShortVideoMessenger, isToggled:  shortVideoMessenger, form: 2  },
  ]


  const forms = ['texter', 'video', 'short']

  const [currentForm, setCurrentForm] = useState(forms[0])

  const changeWorkspace = (i) => {
    try{
      console.log(`Setting form ${i}`);
      
      setCurrentForm(forms[i]) 
    }
    catch(e){
      console.log(e);
    }
  }


  return (
    <>
      <div className='app-wrapper'>
        <div className='app-layout'>
          <TopBar />
          <div className='main-row'>
            <Sidebar menuItems={menuItems} changeWorkspace = {changeWorkspace}/>
            <Workspace currentForm = {currentForm}/>
          </div>
        </div>
      </div>
      
    </>
  )
}
