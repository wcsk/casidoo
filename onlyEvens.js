// Write a function that takes an array of integers and returns a new array containing
// only the even numbers, and sorted.

// onlyEvens([1, 2, 3, 4, 5, 2])
// [2, 2, 4]

// onlyEvens([7, 8, 1, 0, 2, 5])
// [0, 2, 8]

// onlyEvens([11, 13, 15])
// []

function onlyEvens(arr) {
  const evenArray = arr.reduce((array, item) => {
    if (item % 2 === 0) {
      array.push(item);
    }

    return array;
  }, []);
  console.log(evenArray.sort((a, b) => a - b));
  return evenArray.sort((a, b) => a - b);
}
