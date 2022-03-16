// tuple (튜플) : 배열의 확장(타입핑), 제약걸기가 가능
const address = [14023, '서울시', '송파구'];
let [zipcode, address1] = address;
const BookData = [
    ['헨리 8세', '셰익스피어', 1884],
    ['헨리 8세', '셰익스피어', 1884],
];
BookData.push(['a', 'b', 23]);
function getArrayOne() {
    return [14023, '서울시', '송파구'];
}
function getArrayTwo() {
    return [14023, '서울시', '송파구'];
}
let address2 = getArrayTwo()[2];
address2 = 12;
//# sourceMappingURL=app_tuple.js.map