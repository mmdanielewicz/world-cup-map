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



                        
                    </div>
                </>
            )}
        </div>
    )
  }
  
  export default SidePanel