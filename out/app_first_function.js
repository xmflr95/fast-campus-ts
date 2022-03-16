function ul(child) {
    return `<ul>${child}</ul>`;
}
function ol(child) {
    return `<ol>${child}</ol>`;
}
function makeLI(container, contents) {
    const liList = [];
    for (const content of contents) {
        liList.push(`<li>${content}</li>`);
    }
    return container(liList.join(''));
}
const htmlUL = makeLI(ul, ['월', '화', '수', '목', '금', '토', '일']);
const htmlOL = makeLI(ol, ['봄', '여름', '가을', '겨울']);
console.log(htmlUL);
console.log(htmlOL);
//# sourceMappingURL=app_first_function.js.map