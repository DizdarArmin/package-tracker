function Format(number) {
  let formattedNumber;
  number < 10 ? (formattedNumber = `0${number}`) : (formattedNumber = number);
  return formattedNumber;
}

export function getTime(timestamp) {
  const d = new Date(timestamp);
  const time = Format(d.getHours()) + `:` + Format(d.getMinutes());
  return time;
}

export function getDate(timestamp) {
  const d = new Date(timestamp);
  let day = Format(d.getDay());
  let month = Format(d.getMonth());
  let year = d.getFullYear();
  const date = `${day}.${month}.${year}`;
  return date;
}
