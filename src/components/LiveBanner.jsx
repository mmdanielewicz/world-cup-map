import { isLikelyLive } from '../utils/gameStatus'
import { stadiums } from '../data/stadiums'

function LiveBanner({ games, onSelectStadium }) {
  const liveGames = games.filter(isLikelyLive)
  if (liveGames.length === 0) return null

  return (
    <div className="live-banner">
      {liveGames.map(game => {
        const stadium = stadiums.find(s => s.apiStadiumId === game.stadium_id)

        return (
          <div
            key={game.id}
            className="live-banner-item"
            onClick={() => stadium && onSelectStadium(stadium)}
            style={{ cursor: stadium ? 'pointer' : 'default' }}
          >
            <span className="live-pulse-dot"></span>
            <span className="live-banner-label">LIVE</span>
            <span>{game.home_team_name_en} vs {game.away_team_name_en}</span>
          </div>
        )
      })}
    </div>
  )
}

export default LiveBanner