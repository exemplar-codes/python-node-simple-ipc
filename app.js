const compute = require("./compute");

async function stringMultiplication() {
  const result = await compute(`"Bingo" * 2`); // type object, can be used directly
  console.log(result);
}
stringMultiplication();
