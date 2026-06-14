function SidePanel({ stadium, onClose }) {

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
                    <p className="placeholder-text">Match data coming soon</p>
                </div>
                </>
            )}
        </div>
    )
  }
  
  export default SidePanel