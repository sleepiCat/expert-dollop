/*



*/

function sortedSquaredArray(array) {
  // Write your code here.

  const lastIndex = array.length - 1
  let startPtr = 0
  let endPtr = lastIndex

  let newArr = new Array(array.length)

  for (let index = lastIndex; index > -1; index--) {
    //square the elem in the startPtr and endPtr
    //compare and place the larger value at the end
    let start = Math.abs(array[startPtr]) ** 2
    let end = Math.abs(array[endPtr]) ** 2

    if (start > end) {
      //larger square is in front
      newArr[index] = start
      startPtr++
    } else {
      newArr[index] = end
      endPtr--
    }
  }
  return newArr
  //return [];
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray