export default function MapMarker({ lat, lng, locationName }) {
  return (
    <div className="marker" lat={lat} lng={lng}>
      <i className="fas fa-3x fa-crosshairs"></i>
      <br />
      <h2> {locationName}</h2>
    </div>
  );
}
