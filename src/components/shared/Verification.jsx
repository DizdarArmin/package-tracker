export default function Verification({ parcel, translation }) {
  const { verification_required } = parcel;
  return (
    <>
      {verification_required && (
        <h5 className="verification">{translation.verification}</h5>
      )}
    </>
  );
}
