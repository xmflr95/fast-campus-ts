"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foo = function () {
    return '아무 쓸모 없는 함수';
};
const iUser = {
    id: 1,
    name: '빌 게이츠',
    email: 'bill@ms.com',
    receiveInfo: false,
    active: 'Y',
};
const TUser = {
    id: 1,
    name: '빌 게이츠',
    email: 'bill@ms.com',
    receiveInfo: false,
    active: 'Y',
};
const iStyle = {
    border: 5,
    width: 300,
    height: 100,
};
const tStyle = {
    border: true,
    visible: false,
    display: true,
};
const getApi = (url, search = '') => {
    return new Promise(resolve => resolve('OK'));
};
getApi('/api/user')
    .then(data => console.log(data));
class Rect {
    constructor(x, y, width, height) {
        this.id = Math.random() * 100000;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
function createDefaultRect(cstor) {
    return new cstor(0, 0, 100, 100);
}
const rect1 = new Rect(0, 0, 100, 20);
const rect2 = createDefaultRect(Rect);
//# sourceMappingURL=app_type.js.map