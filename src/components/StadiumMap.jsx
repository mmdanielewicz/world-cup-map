import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from 'leaflet';
import { stadiums } from '../data/stadiums';
import stadiumIconImg from '../assets/stadium.png';
import { isLikelyLive } from '../utils/gameStatus';

// custom stadium marker on map
const stadiumIcon = L.icon({
    iconUrl: stadiumIconImg,
    iconSize: [48, 48],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
})
  
const liveStadiumIcon = L.divIcon({
    html: `<div class="live-marker-wrapper">
             <span class="live-marker-badge">LIVE</span>
             <img src="${stadiumIconImg}" class="live-marker-icon" />
           </div>`,
    className: '',
    iconSize: [48, 64],
    iconAnchor: [24, 48],
    popupAnchor: [0, -48],
  })

// control map view when clicked 
function MapController({ selectedStadium }) {
    const map = useMap();

    useEffect(() => {
        // recalculate size
        const timer = setTimeout(() => {
            map.invalidateSize();
            if (selectedStadium) {
                // go back to original zoom and position if clicked out of the stadium
                map.flyTo([selectedStadium.lat, selectedStadium.lng], 10, { duration: 1.2 });
            } else {
                map.flyTo([35, -97], 4, { duration: 1.2 });
            }
          }, 250); // small delay so the panel's width transition has started
      
          return () => clearTimeout(timer);
        }, [selectedStadium, map]);

    return null;
}


// leaflet map component
function StadiumMap({ onStadiumClick, selectedStadium, games }) {
  return (
    <MapContainer center={[30, -97]} zoom={4} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
        <TileLayer
        attribution='&copy; OpenStreetMap &copy; CARTO'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {/* zoom to marker */}
        <MapController selectedStadium={selectedStadium} />
        
        {stadiums.map((stadium) => {
            const hasLive = games.some(g => g.stadium_id === stadium.apiStadiumId && isLikelyLive(g))

            return (
            <Marker
                key={stadium.name}
                position={[stadium.lat, stadium.lng]}
                icon={hasLive ? liveStadiumIcon : stadiumIcon}
                eventHandlers={{ click: () => onStadiumClick(stadium) }}
            />
            )
        })}

    
    </MapContainer>
  );
}

export default StadiumMap;