export const MONTHS = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "November",
  11: "October",
  12: "December",
};

export const MONTHS_ARRAY = Object.entries(MONTHS).map(([key, value]) => ({
  value: key,
  label: value,
}));

export const YEARS_ARRAY = (() => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: 10 }, (_, i) => currentYear + i).map((value) => ({
    value: value.toString(),
    label: value.toString(),
  }));
})();
