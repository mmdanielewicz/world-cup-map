import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import { stadiums } from '../data/stadiums';
import stadiumIconImg from '../assets/stadium.png';

// custom stadium marker on map
const stadiumIcon = L.icon({
    iconUrl: stadiumIconImg,
    iconSize: [48, 48],      
    iconAnchor: [16, 32],    
    popupAnchor: [0, -32], 
    className: 'stadium-icon'
  })

// leaflet map component
function StadiumMap({ onStadiumClick }) {
  return (
    <MapContainer center={[35, -97]} zoom={4} style={{ height: "800px", width: "100%" }}>
        <TileLayer
        attribution='&copy; OpenStreetMap &copy; CARTO'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        
        {stadiums.map((stadium) => (
            <Marker key={stadium.name} position={[stadium.lat, stadium.lng]} icon={stadiumIcon}
                eventHandlers={{
                    click: () => 
                        onStadiumClick(stadium),
                }}>

                <Popup>
                    <strong>{stadium.name}</strong><br />
                    {stadium.city}, {stadium.country}
                </Popup>
            </Marker>

        ))}

    
    </MapContainer>
  );
}

export default StadiumMap;