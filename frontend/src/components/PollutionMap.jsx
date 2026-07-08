import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
} from "react-leaflet";

const locations = [
  {
    name: "AQI Monitoring Station",
    position: [12.9716, 77.5946],
    color: "green",
    radius: 350,
    type: "station",
    info: "Live AQI Monitoring",
  },
  {
    name: "Traffic Hotspot",
    position: [12.9785, 77.5993],
    color: "red",
    radius: 250,
    type: "traffic",
    info: "Traffic Contribution: 87%",
  },
  {
    name: "Industrial Zone",
    position: [12.9608, 77.6101],
    color: "orange",
    radius: 300,
    type: "industry",
    info: "Industrial Emissions",
  },
  {
    name: "Construction Site",
    position: [12.9875, 77.5750],
    color: "blue",
    radius: 220,
    type: "construction",
    info: "Dust Emissions",
  },
];

function PollutionMap() {
  return (
    <div
      style={{
        height: "420px",
        borderRadius: "18px",
        overflow: "hidden",
        marginTop: "20px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      }}
    >
      <MapContainer
        center={[12.9716, 77.5946]}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((location, index) => (
          <div key={index}>
            <Circle
              center={location.position}
              radius={location.radius}
              pathOptions={{
                color: location.color,
                fillColor: location.color,
                fillOpacity: 0.25,
              }}
            />

            <Marker position={location.position}>
              <Popup>
                <h3>{location.name}</h3>

                <p>{location.info}</p>

                <strong>Risk Level:</strong> Moderate

                <br />

                <strong>Status:</strong> Active
              </Popup>
            </Marker>
          </div>
        ))}
      </MapContainer>
    </div>
  );
}

export default PollutionMap;