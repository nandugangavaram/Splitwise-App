export const data = [
  {
    exp_name: "Boat",
    amount: "53",
    date: "Mar 31",
    paid_by: "yash",
    borrowed_by: "nandan",
  },
  {
    exp_name: "MVJ Sauces",
    amount: "24",
    date: "Mar 28",
    paid_by: "nandan",
    borrowed_by: "david",
  },
  {
    exp_name: "Veggies",
    amount: "15",
    date: "Mar 11",
    paid_by: "david",
    borrowed_by: "yash",
  },
];
export const users = ["David", "Nandan", "Yash"];
export const capitalizeFirstLetter = function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
