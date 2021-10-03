// another example of stuff that does not need to be a separate component, specially because is only used in DetailsTo.jsx -1
export default function Phone({ number }) {
  return (
    <h3 className="padding-b">
      <i className="fas fa-phone-square-alt"></i>
      {number}
    </h3>
  );
}
