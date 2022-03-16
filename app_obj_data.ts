// 객체
type Box = {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;
  borderWidth?: number;
  ['className']?: string;
}

let box: Box = {
  width: 200,
  height: 200,
  borderRadius: 5,
  backgroundColor: 'red',
};

function makeBox (
  width: number,
  height: number,
  borderRadius: number,
  backgroundColor: string
): Box {
  return {
    width,
    height,
    borderRadius,
    backgroundColor,
  };
}

makeBox(100, 100, 0, 'blue');

class Shape implements Box {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;

  constructor(width: number, height: number, borderRadius: number, backgroundColor: string) {
    this.width = width;
    this.height = height;
    this.borderRadius = borderRadius;
    this.backgroundColor = backgroundColor;
  }
}

const boxShape = new Shape(10, 10, 0, 'blue');

if (boxShape instanceof Shape) {
  console.log("true");
}

box.borderWidth = 10;
box['className'] = 'box rounded';

console.log(box);

const box1 = box;
const box2 = Object.assign({}, box);
const box3 = { ...box, borderRaidus: 10};
const box4 = JSON.parse(JSON.stringify(box));

box1.borderWidth = 15;
console.log(box1);
console.log(box2);
console.log(box3);
console.log(box4);