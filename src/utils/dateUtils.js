export const fomateDate = (inputDate) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dateParts = inputDate.split(" ");
  const dateString = dateParts[0];
  const timeString = dateParts[1];
  const [year, month, day] = dateString.split("-");
  const [hours, minutes] = timeString.split(":");
  const date = new Date(year, month - 1, day, hours, minutes);
  const dayOfWeek = daysOfWeek[date.getDay()];
  const formattedMonth = months[date.getMonth()];
  return `${dayOfWeek}, ${date.getDate()} ${formattedMonth}`;
};
