export function getLastDateOfMonth(date) {
  // Convert the input to a Date object
  const givenDate = new Date(date);

  // Get the year and month from the given date
  const year = givenDate.getFullYear();
  const month = givenDate.getMonth();

  // Create a new Date object representing the last day of the month
  const lastDate = new Date(year, month + 1, 0);

  return lastDate;
}

export function generateFirstDatesOfYear(year) {
  const dates = [];

  // Loop through all months (0 = January, 11 = December)
  for (let month = 0; month < 12; month++) {
    // Create a date representing the first day of each month
    const firstDate = new Date(year, month, 1);
    dates.push(firstDate);
  }

  return dates;
}

export const SHORT_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

export const MONTHS = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
