type Book = {
  title: string,
  copyright?: string;
  author?: string;
};

const books: string[] = [
  "헨리 6세",
  "리처드 3세",
  "실수 연발",
  "말괄량이 길들이기",
  "헨리 8세",
];

const bookTitleToBookObject = (book: string) => ({ title: book });
const makeAuthor = (name: string) => (book: Book) => ({
  ...book,
  author: name
});

const shakespeareTwoBooks: Book[] = books
  .map(bookTitleToBookObject)
  .map(makeAuthor("William Shakespeare"));

// console.log(shakespeareTwoBooks);

const henry: Book[] = shakespeareTwoBooks.filter((book: Book) => 
  book.title.includes("헨리")
);
// console.log(henry);

const someNumbers: number[] = [10, 5, 3, 15, 56];

const sumNumber = someNumbers.reduce((a: number, b: number) => a + b, 0);

// console.log(sumNumber);

// 배열안에 여러 객체를 하나의 객체로 합치는 방법
type SomeObject = {
  [key: string]: string | number;
}

const someObjects: SomeObject[] = [
  { border: "none" },
  { fontSize: 24 },
  { className: "box sm-box" }
];

const someObject: SomeObject = someObjects.reduce(
  (a: SomeObject, b: SomeObject) => ({ ...a, ...b }),
  {}
);

// console.log(someObject);

function sumNumbers(): number {
  return Array.from(arguments).reduce((a: number, b: number) => a + b, 0);
}

// console.log(sumNumbers(10, 20, 30, 40, 50));

function sumNumbersTypeScript(...args: number[]): number {
  return args.reduce((a: number, b: number) => a+ b, 0);
}

console.log(sumNumbersTypeScript(10, 20, 30, 40, 50));

