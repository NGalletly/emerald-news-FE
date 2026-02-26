export function timeFormatter(timeStamp) {
  if (!timeStamp) return "";

  const date = new Date(timeStamp);

  const time = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const dayMonthYear = date.toLocaleDateString("en-GB"); // Gives 24/01/2020

  return `${time}, ${dayMonthYear}`;
}
