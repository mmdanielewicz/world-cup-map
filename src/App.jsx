import { useState } from 'react'
import fifaLogo from './assets/fifa-banner.webp'
import './App.css'
import StadiumMap from './components/StadiumMap'

function App() {
  // keep track of which staidum is clicked on
  const [selectedStadium, setSelectedStadium] = useState(null)

  return (
    <div>
      <div className="container">

        <div className="header">
          <img src={fifaLogo} alt="FIFA Logo" className="fifa-logo" />
        </div>

        <pre>{JSON.stringify(selectedStadium, null, 2)}</pre>

        <StadiumMap onStadiumClick={setSelectedStadium}/>
      </div>
    </div>
  )
}

export default App
