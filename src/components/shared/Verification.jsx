export default function Verification({ parcel, translation }) {
  const { verification_required } = parcel;

  // You don't need the <>, you can run this directly without it
  return (
    verification_required && (
      <h5 className="verification">{translation.verification}</h5>
    )
  );
}
