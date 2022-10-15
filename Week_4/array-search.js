// // Linear Search function
// function search(array, item) {
//   let index = null;

//   for (let i = 0; i < array.length; i++) {
//     if (item === array[i]) {
//       index = i;
//       break;
//     }
//   }

//   return index;
// }

//Binary Search 9log(n) + 3
  function search(array, item) {
    let min = 0; // 1
    let max = array.length - 1; // 1
  
    while (true) { // lg n
      const endIndex = min + max; // lg n
      const middleDecimal = endIndex/2.0; // lg n
      const middleIndex = Math.floor(middleDecimal); // lg n
  
      const currentItem = array[middleIndex]; // lg n
  
      if (currentItem === item) { // lg n
        return middleIndex;
      } else if (currentItem < item) { // lg n
        min = middleIndex + 1;
      } else {
        max = middleIndex - 1; // lg n
      }
  
      if (min > max) { // lg n
        return null; // 1
      }
    }
  }