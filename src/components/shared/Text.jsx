// Do we really need a component for a single H3?
export default function Text({ is, label }) {
  return (
    <h3 className="padding-b">
      {label}: {is}
    </h3>
  );
}
