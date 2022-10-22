function sumItems(array) {
  // Sum all the numbers in the array
    let tempSum = 0;
    for(let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        tempSum += sumItems(array[i]);
      } else {
      tempSum += array[i];
      }
    }
    return Number(tempSum);
  }
const test = [[1, 2, [[3], 4]], 5, []];
console.log(sumItems(test));

module.exports = sumItems;