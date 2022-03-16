let myname = 'kim';

function foo() {
  let x = 10;

  console.log(myname);
  console.log(x);
  bar();

  function bar() {
    let y = 10;

    console.log(x);
    console.log(myname);
  }

  if (x === 10) {
    let x = 100;

    console.log(x);
  }

  bar();
}

foo();