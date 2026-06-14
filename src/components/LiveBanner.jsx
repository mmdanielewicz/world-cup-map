// src/components/LiveBanner.jsx
import { isLikelyLive } from '../utils/gameStatus'

function LiveBanner({ games }) {
  const liveGames = games.filter(isLikelyLive)
  if (liveGames.length === 0) return null

  return (
    <div className="live-banner">
      {liveGames.map(game => (
        <div key={game.id} className="live-banner-item">
          <span className="live-pulse-dot"></span>
          <span className="live-banner-label">LIVE</span>
          <span>{game.home_team_name_en} vs {game.away_team_name_en}</span>
        </div>
      ))}
    </div>
  )
}

export default LiveBanner