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
import { useTeams } from './hooks/useTeams'
import MatchModal from './components/MatchModal'
import TodayBanner from './components/TodayBanner'
import { useNews } from './hooks/useNews'
import NewsBanner from './components/NewsBanner'

function App() {
  // keep track of which staidum is clicked on
  const [selectedStadium, setSelectedStadium] = useState(null)
  const [selectedGame, setSelectedGame] = useState(null)
  // fetch games data from free worldcup26 github API
  const { games, loading } = useGames()
  const stadiumGames = selectedStadium
    ? games.filter(g => g.stadium_id === selectedStadium.apiStadiumId)
    : []
  const { teams } = useTeams()
  const { View } = useLottie({ animationData: loadingAnimation, loop: true })
  const { articles } = useNews()


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
          <TodayBanner games={games} onSelectStadium={setSelectedStadium} />
          <NewsBanner articles={articles} />
        </div>

        <div className="main-layout">
          <div className="map-wrapper">
            <StadiumMap 
            onStadiumClick={setSelectedStadium} 
            selectedStadium={selectedStadium} 
            games={games}/>
          </div>

          <SidePanel 
            stadium={selectedStadium}
            games={games} 
            onClose={
              () => setSelectedStadium(null)
            } 
            onGameClick={setSelectedGame}
          />

          <MatchModal
            game={selectedGame}
            teams={teams}
            stadium={selectedStadium}
            onClose={() => setSelectedGame(null)}
          />

        </div>


    </>
  )
}

export default App
