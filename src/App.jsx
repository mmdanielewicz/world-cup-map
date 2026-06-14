import { useState } from 'react'
import fifaLogo from './assets/fifa-banner.webp'
import './App.css'
import StadiumMap from './components/StadiumMap'
import SidePanel from './components/SidePanel' 
import { useGames } from './hooks/useGames'
import LiveBanner from './components/LiveBanner'
import { useLottie } from 'lottie-react'
import loadingAnimation from './assets/loading.json'
console.log('loadingAnimation:', loadingAnimation)

function App() {
  // keep track of which staidum is clicked on
  const [selectedStadium, setSelectedStadium] = useState(null)
  // fetch games data from free worldcup26 github API
  const { games, loading } = useGames()
  const stadiumGames = selectedStadium
    ? games.filter(g => g.stadium_id === selectedStadium.apiStadiumId)
    : []

  const { View } = useLottie({ animationData: loadingAnimation, loop: true })

  if (loading) {
    return (
      <>
        <div className="header">
          <img src={fifaLogo} alt="FIFA Logo" className="fifa-logo" />
        </div>

        <div className="loading-screen">
          <div style={{ width: 200, height: 200 }}>{View}</div>
        </div>
      </>
    )
  }

  return (
    <>
        <div className="header">
          <img src={fifaLogo} alt="FIFA Logo" className="fifa-logo" />
          {/* if there's a live game going on, show it in header */}
          <LiveBanner games={games} onSelectStadium={setSelectedStadium} />
        </div>

        <div className="main-layout">
          <div className="map-wrapper">
            <StadiumMap onStadiumClick={setSelectedStadium} selectedStadium={selectedStadium} />
          </div>

          <SidePanel 
            stadium={selectedStadium}
            games={games} 
            onClose={
              () => setSelectedStadium(null)
            } />

        </div>


    </>
  )
}

export default App
