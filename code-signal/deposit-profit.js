function depositProfit(deposit, rate, threshold) {
  if (deposit >= threshold) return 0;

  let year = 1;
  const percentage = 1 + rate / 100;

  const calcTotal = (currentTotal) => currentTotal * percentage;
  let total = calcTotal(deposit);


  while (total < threshold) {
    year++;
    total = calcTotal(total);
  }
  return year;
}
