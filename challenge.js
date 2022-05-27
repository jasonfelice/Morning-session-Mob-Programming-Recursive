module.exports = function sum(number, total = 0) {
  total += number;
  if(number <= 0) {
    return total;
  }
  return sum(number - 1, total);
}

console.log(sum(4))
console.log(sum(10))
