import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import { stadiums } from '../data/stadiums';

const stadiumIcon = L.divIcon({
    html: '🏟️',
    className: 'stadium-icon',
    iconSize: [30, 30],
  })

function StadiumMap() {
  return (
    <MapContainer center={[35, -97]} zoom={4} style={{ height: "600px", width: "100%" }}>
        <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {stadiums.map((stadium) => (
            <Marker key={stadium.name} position={[stadium.lat, stadium.lng]} icon={stadiumIcon}>
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