function myFn(x) {
  return x + 100;
}

function sum(a, b, ...args) {
  let s = 0;

  for (let i = 0; i < args.length; i++)  {
    s = s + arguments[i];
  }

  return s;
}

const sumV2 = (a, b, ...args) => {
  let s = 0;

  for (let i = 0; i < args.length; i++)  {
    s = s + arguments[i];
  }

  return s;
}

const ten = x => 100 + x;

ten(10);

const result = myFn(10.);

const abcSum = sum(10, 20, 30);
console.log(abcSum)
const myFnV2 = function () {
  return 100;
};

myFnV2();
sum.call(null, 10, 20, 30);
sum.apply(null, [10, 20, 30]);

(function() {
  console.log("IIFE 실행");
})();

// Generator Function
function* gen() {
  yield 10;
  yield 20;
  return 30;
}

const g = gen();

g.next();
g.next();
g.next();

// 비동기 함수
async function myTask() {
  
}