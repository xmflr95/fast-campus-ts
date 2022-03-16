function salePrice(discountRate, price) {
  return price - (price * (discountRate * 0.01));
}

console.log('여름 세일 - ' + salePrice(30, 567000));

function discountRate(discountRate) {
  return function(price) {
    return price - (price * (discountRate * 0.01));
  }
}

console.log('여름 세일 - ' + discountRate(30)(567000));

let summerPrice = discountRate(30);
let winterPrice = discountRate(10);

console.log('여름 세일 - ' + summerPrice(567000));