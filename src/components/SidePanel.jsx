function SidePanel({ stadium, games, onClose }) {

    const stadiumGames = stadium ? 
        games.filter(g => g.stadium_id === stadium.apiStadiumId)
         : []

    return (
        
        <div className={`side-panel ${stadium ? 'open' : ''}`}>
            {stadium && (
                <>
                    <button className="close-btn" onClick={onClose}>×</button>

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

                        {stadiumGames.map(game => (
                            <div key={game.id} className="game-card">
                                <div className="teams">
                                    <span>{game.home_team_name_en}</span>
                                    {/* if game is finished, show score */}
                                    <span className="match-score">
                                        {game.finished === "TRUE"
                                        ? `${game.home_score} - ${game.away_score}`
                                        : "vs"}
                                    </span>
                                    <span>{game.away_team_name_en}</span>
                                </div>

                                <div className="match-meta">
                                    <span>{game.local_date}</span>
                                    <span className="match-status">{game.time_elapsed}</span>
                                </div>
                            </div>
                        ))}



                    </div>
                </>
            )}
        </div>
    )
  }
  
  export default SidePanel