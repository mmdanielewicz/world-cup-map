import { useState } from 'react'
import fifaLogo from './assets/fifa-banner.webp'
import './App.css'
import StadiumMap from './components/StadiumMap'
import SidePanel from './components/SidePanel' 

function App() {
  // keep track of which staidum is clicked on
  const [selectedStadium, setSelectedStadium] = useState(null)

  return (
    <div>
        <div className="header">
          <img src={fifaLogo} alt="FIFA Logo" className="fifa-logo" />
        </div>

        <div className="main-layout">
          <div className="map-wrapper">
            <StadiumMap onStadiumClick={setSelectedStadium} selectedStadium={selectedStadium} />
          </div>

          <SidePanel 
            stadium={selectedStadium} 
            onClose={
              () => setSelectedStadium(null)
            } />

        </div>


    </div>
  )
}

export default App
