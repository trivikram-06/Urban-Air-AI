import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function PollutionMap() {
  return (
    <div
      style={{
        height: "400px",
        borderRadius: "12px",
        overflow: "hidden",
        marginTop: "20px",
      }}
    >
      <MapContainer
        center={[12.9716, 77.5946]}
        zoom={11}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[12.9716, 77.5946]}>
          <Popup>
            Bengaluru<br />
            Predicted AQI Zone
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default PollutionMap;