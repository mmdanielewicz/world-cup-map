import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StadiumMap from './components/StadiumMap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="container">
        <h1>2026 FIFA World Cup Map</h1>
        <StadiumMap />
      </div>
    </div>
  )
}

export default App
