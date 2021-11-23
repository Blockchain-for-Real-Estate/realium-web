// https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
const Round2DecimalPlaces = (number) => {
  return Math.round((number + Number.EPSILON) * 100) / 100;
};

export default Round2DecimalPlaces;
