const AvaxRound = (avax) => {
  let num = avax / 1000000000;
  num = Math.round((num + Number.EPSILON) * 100) / 100;
  return num.toFixed(2);
};

export default AvaxRound;
