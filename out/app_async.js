var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.floor(Math.random() * 10) % 2 === 0) {
                resolve('success');
            }
            else {
                reject('failure');
            }
        }, ms);
    });
}
delay(3000)
    .then((result) => {
    console.log('done pRomise! ' + result);
})
    .catch((error) => {
    console.error('fail promise! ' + error);
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('start job');
            const result = yield delay(3000);
            console.error('done async! ' + result);
        }
        catch (e) {
            console.error('fail async! ' + e);
        }
    });
}
main();
//# sourceMappingURL=app_async.js.map