import { useState } from 'react'
import fifaLogo from './assets/fifa-banner.webp'
import './App.css'
import StadiumMap from './components/StadiumMap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="container">
        <img src={fifaLogo} alt="FIFA Logo" className="fifa-logo" 
          style={{ width: '100%', maxWidth: '700px', height: 'auto' }}/>


        <StadiumMap />
      </div>
    </div>
  )
}

export default App
