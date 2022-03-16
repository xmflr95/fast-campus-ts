// 생성기 함수
function makeInfiniteEnerhyGenerator() {
    let energy = 0;
    return function (booster = 0) {
        if (booster) {
            energy += booster;
        }
        else {
            energy++;
        }
        return energy;
    };
}
function* infiniteEnerhyGenerator() {
    let energy = 1;
    while (true) {
        const booster = yield energy;
        if (booster) {
            energy += booster;
        }
        else {
            energy++;
        }
    }
}
// const energy = makeInfiniteEnerhyGenerator();
// for (let i = 0; i < 5; i++) {
//   console.log(energy());
// }
// console.log(energy(5));
const energyGenerator = infiniteEnerhyGenerator();
for (let i = 0; i < 5; i++) {
    console.log(energyGenerator.next());
}
console.log(energyGenerator.next(5));
//# sourceMappingURL=app_gen_function.js.map