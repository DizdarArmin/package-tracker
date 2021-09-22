import { getDate, getTime } from "../services/DateParse";

export default function DateTime({ date, of }) {
  return (
    <h3 className="padding-b">
      {of}:
      <br />
      <i className="far fa-calendar-alt "></i>
      <span className="margin"> {getDate(date)}</span>
      <i className="far fa-clock"></i>
      <span className="margin"> {getTime(date)}</span>
    </h3>
  );
}
