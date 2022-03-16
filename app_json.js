// JSON
const jsonString = `
  {
    "name": "Kim min tae",
    "age": 30,
    "bloodType": "B"
  }
`;

try {
  const myJson = JSON.parse(jsonString);
  console.log(myJson.name);
  
  console.log(JSON.stringify(myJson));
} catch(e) {
  console.log("다시 한번 시도해 주세요");
}
