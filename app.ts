import * as allTypes from './type';

const foo: allTypes.FooFunction = function() {
  return '아무 쓸모 없는 함수';
}

const iUser: allTypes.IUser = {
  id: 1,
  name: '빌 게이츠',
  email: 'bill@ms.com',
  receiveInfo: false,
  active: 'Y',
};

const TUser: allTypes.TUser = {
  id: 1,
  name: '빌 게이츠',
  email: 'bill@ms.com',
  receiveInfo: false,
  active: 'Y',
};

const iStyle: allTypes.IOnlyNumberValueObject = {
  border: 5,
  width: 300,
  height: 100,
};

const tStyle: allTypes.TOnlyBooleanValueObject = {
  border: true,
  visible: false,
  display: true,
};

const getApi: allTypes.IGetApi = (url, search = '') => {
  return new Promise(resolve => resolve('OK'));
};

getApi('/api/user')
  .then(data => console.log(data));

class Rect implements allTypes.IRect {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.id = Math.random() * 100000;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

function createDefaultRect(cstor: allTypes.IRectConstructor) {
  return new cstor(0, 0 ,100, 100);
}

const rect1 = new Rect(0, 0, 100, 20);
const rect2 = createDefaultRect(Rect);