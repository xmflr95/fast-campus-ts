const books = [
    "헨리 6세",
    "리처드 3세",
    "실수 연발",
    "말괄량이 길들이기",
    "헨리 8세",
];
const bookTitleToBookObject = (book) => ({ title: book });
const makeAuthor = (name) => (book) => (Object.assign(Object.assign({}, book), { author: name }));
const shakespeareTwoBooks = books
    .map(bookTitleToBookObject)
    .map(makeAuthor("William Shakespeare"));
// console.log(shakespeareTwoBooks);
const henry = shakespeareTwoBooks.filter((book) => book.title.includes("헨리"));
// console.log(henry);
const someNumbers = [10, 5, 3, 15, 56];
const sumNumber = someNumbers.reduce((a, b) => a + b, 0);
const someObjects = [
    { border: "none" },
    { fontSize: 24 },
    { className: "box sm-box" }
];
const someObject = someObjects.reduce((a, b) => (Object.assign(Object.assign({}, a), b)), {});
// console.log(someObject);
function sumNumbers() {
    return Array.from(arguments).reduce((a, b) => a + b, 0);
}
// console.log(sumNumbers(10, 20, 30, 40, 50));
function sumNumbersTypeScript(...args) {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sumNumbersTypeScript(10, 20, 30, 40, 50));
//# sourceMappingURL=app_arrMethod.js.map