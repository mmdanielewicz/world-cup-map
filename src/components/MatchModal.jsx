import { isLikelyLive } from '../utils/gameStatus'
import { formatScorers } from '../utils/formatScorers'

function MatchModal({ game, teams, stadium, onClose }) {
  if (!game) return null

  const homeTeam = teams.find(t => t.id === game.home_team_id)
  const awayTeam = teams.find(t => t.id === game.away_team_id)
  const live = isLikelyLive(game)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="modal-tags">
          <span className="group-tag">Group {game.group}</span>
          <span className="matchday-tag">Matchday {game.matchday}</span>
          {live && <span className="live-badge">LIVE</span>}
        </div>

        <div className="modal-teams">
          <div className="modal-team">
            {homeTeam?.flag && <img src={homeTeam.flag} alt={homeTeam.name_en} className="team-flag" />}
            <p className="team-name">{game.home_team_name_en}</p>
            {homeTeam?.fifa_code && <p className="fifa-code">{homeTeam.fifa_code}</p>}
          </div>

          <div className="modal-score">
            {game.finished === "TRUE" || live
              ? `${game.home_score} - ${game.away_score}`
              : "VS"}
          </div>

          <div className="modal-team">
            {awayTeam?.flag && <img src={awayTeam.flag} alt={awayTeam.name_en} className="team-flag" />}
            <p className="team-name">{game.away_team_name_en}</p>
            {awayTeam?.fifa_code && <p className="fifa-code">{awayTeam.fifa_code}</p>}
          </div>
        </div>

        {game.finished === "TRUE" && (game.home_scorers !== "null" || game.away_scorers !== "null") && (
          <div className="modal-scorers">
            <h3>Goals</h3>
            {game.home_scorers !== "null" && (
              <p className="scorer-line">{game.home_team_name_en}: {formatScorers(game.home_scorers)}</p>
            )}
            {game.away_scorers !== "null" && (
              <p className="scorer-line">{game.away_team_name_en}: {formatScorers(game.away_scorers)}</p>
            )}
          </div>
        )}

        {stadium && (
          <div className="modal-venue">
            <h3>Venue</h3>
            <p>{stadium.name}</p>
            <p className="venue-meta">{stadium.city}, {stadium.country}</p>
          </div>
        )}

        <div className="modal-meta">
          <span>{game.local_date}</span>
          <span className="match-status">
            {live ? "Check back for final score" : game.time_elapsed}
          </span>
        </div>
      </div>
    </div>
  )
}

export default MatchModal