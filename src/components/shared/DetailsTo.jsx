import Column from "./Column";
import Text from "./Text";
import Phone from "./Phone";
import DateTime from "./DateTime";
import Notes from "./Notes";
export default function DetailsTo({ parcel, translation }) {
  const {
    user_name,
    user_phone,
    location_name,
    eta,
    notes,
    verification_required,
  } = parcel;
  return (
    <Column>
      <Text is={user_name} label={translation.to} />
      <Phone number={user_phone} />
      <Text is={location_name} label={translation.pickup} />
      <DateTime of={translation.arrival} date={eta} />
      {notes && <Notes notes={notes} label={translation.notes} />}
    </Column>
  );
}
