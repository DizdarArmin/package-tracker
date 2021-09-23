export default function MapMarker({ lat, lng, locationName }) {
  return (
    <a
      href={`http://maps.google.com/maps?z=13&t=m&q=loc:${lat}+${lng}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="marker" lat={lat} lng={lng}>
        <i className="fas fa-3x fa-crosshairs"></i>
        <br />
        <h2> {locationName}</h2>
      </div>
    </a>
  );
}
