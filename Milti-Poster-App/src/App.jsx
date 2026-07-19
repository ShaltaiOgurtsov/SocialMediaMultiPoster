
import { Sidebar } from '../Components/Main/Sidebar'
import { TopBar } from '../Components/Main/TopBar'
import { Workspace } from '../Components/Main/Workspace'
import './App.css'

function App() {
  return (
    <>
      <div className='app-wrapper'>
        <div className='app-layout'>
          <TopBar />
          <div className='main-row'>
            <Sidebar />
            <Workspace />
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
