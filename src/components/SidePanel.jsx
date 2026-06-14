import { isLikelyLive } from '../utils/gameStatus'

function SidePanel({ stadium, games, onClose }) {

    // sort games by date and filter by the stadium
    // LIVE AT TOP
    const stadiumGames = stadium
    ? games
        .filter(g => g.stadium_id === stadium.apiStadiumId)
        .sort((a, b) => {
          if (isLikelyLive(a) && !isLikelyLive(b)) return -1
          if (!isLikelyLive(a) && isLikelyLive(b)) return 1
          return new Date(a.local_date) - new Date(b.local_date)
        })
    : []



    return (
        
        <div className={`side-panel ${stadium ? 'open' : ''}`}>
            {stadium && (
                <>
                    <button className="close-btn" onClick={onClose}>×</button>

                    {/* location info */}
                    <div className="panel-header">
                        <span className="country-tag">{stadium.country}</span>
                        <h2>{stadium.name}</h2>
                        <p className="city">{stadium.city}</p>
                    </div>

                    <div className="panel-section">
                        <h3>Matches</h3>
                        
                        {/* check if there's even games */}
                        {stadiumGames.length === 0 && (
                            <p>No matches scheduled.</p>
                        )}

                        {/* check first if the match actually has assigned teams */}
                        {stadiumGames.map(game => {
                            const hasTeams = game.home_team_name_en && game.away_team_name_en
                            const live = isLikelyLive(game)

                            return (
                                <div key={game.id} className={`match-card ${live ? 'live' : ''}`}>
                                    {live && <span className="live-badge">LIVE</span>}

                                    <div className="match-teams">
                                        {hasTeams ? (
                                        <>

                                            <span>{game.home_team_name_en}</span>
                                            {/* show score for live & finished games */}
                                            <span className="match-score">
                                                {game.finished === "TRUE" || live
                                                ? `${game.home_score} - ${game.away_score}`
                                                : "vs"}
                                            </span>
                                            <span>{game.away_team_name_en}</span>
                                        </>
                                        ) : (
                                        <span className="tbd-text">Teams TBD</span>
                                        )}
                                    </div>
                                    <div className="match-meta">
                                        <span>{game.local_date}</span>
                                        <span className="match-status">{game.time_elapsed}</span>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </>
            )}
        </div>
    )
  }
  
  export default SidePanel