import { isToday, isLikelyLive } from '../utils/gameStatus'
import { stadiums } from '../data/stadiums'

function TodayBanner({ games, onSelectStadium }) {
  const todayGames = games
    .filter(isToday)
    .sort((a, b) => new Date(a.local_date) - new Date(b.local_date))

  if (todayGames.length === 0) return null

  return (
    <div className="today-banner">
      <span className="today-banner-label">Today</span>
      <div className="today-banner-scroll">
        {todayGames.map(game => {
          const stadium = stadiums.find(s => s.apiStadiumId === game.stadium_id)
          const live = isLikelyLive(game)
          const kickoff = new Date(game.local_date)
          const time = kickoff.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })

          return (
            <div
              key={game.id}
              className={`today-banner-item ${live ? 'live' : ''}`}
              onClick={() => stadium && onSelectStadium(stadium)}
              style={{ cursor: stadium ? 'pointer' : 'default' }}
            >
              {live && <span className="live-pulse-dot"></span>}
              <span className="today-teams">
                {game.home_team_name_en} vs {game.away_team_name_en}
              </span>
              <span className="today-time">
                {game.finished === "TRUE"
                  ? `${game.home_score}-${game.away_score}`
                  : time}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TodayBanner