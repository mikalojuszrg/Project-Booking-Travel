export const activeCountry = (counter) => {
  if (typeof counter !== "number") {
    return "";
  }
  if (counter === 0) {
    return "Tokyo";
  } else if (counter === 1) {
    return "Bali";
  } else {
    return "London";
  }
};
