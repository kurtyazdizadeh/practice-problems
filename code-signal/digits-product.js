// Given an integer product, find the smallest positive(i.e.greater than 0) integer the product of whose digits is equal to product.If there is no such integer, return -1 instead.

//   Example

// For product = 12, the output should be
// digitsProduct(product) = 26;
// For product = 19, the output should be
// digitsProduct(product) = -1

function digitsProduct(product) {
  let result = '';
  if (!product) return 10;

  const calcProduct = num => {
    if (num < 10) {
      result += num;
      return num;
    }
    for (let i = 9; i > 1; i--) {
      if (num % i === 0) {
        result += i;
        return calcProduct(num / i);
      }
    }
  }
  calcProduct(product);

  return ([...result].reduce(((a, b) => a * b), 1) === product)
    ? +[...result].reverse().join('')
    : -1
}
