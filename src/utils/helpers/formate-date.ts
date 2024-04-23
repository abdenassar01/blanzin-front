export function formateDate(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();
  const hours = date.getHours();
  const minuts = date.getMinutes();
  const seconds = date.getSeconds();

  return { year, month, day, hours, minuts, seconds };
}

export function dateToTime(date: Date) {
  const { hours, minuts } = formateDate(date);
  return `${hours.toString().padStart(2, "0")}:${minuts
    .toString()
    .padStart(2, "0")}`;
}
