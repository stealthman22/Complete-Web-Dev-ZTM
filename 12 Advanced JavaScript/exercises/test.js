/* 


Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

*/


// Sol 1
// Expected output
// [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]


let roughArray = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

/* function sortArray() {
    roughArray.map(num => {
        if (num[i] > 1) {
            roughArray.reduce((acc, num) => {
                return acc.concat(num)
            }, [])
        }
    })

} */

/* 
const cleanArray = roughArray.reduce((acc, num) => {
    let i = acc.findIndex(num);
    if (i) {
        return acc.concat(num);
    }
}, [])
cleanArray(); */


//const cleanArray = roughArray.reduce((acc, num, index, ))


//const sortArray = roughArray.map((a, b) => roughArray.sort(a - b));

let sortArray = roughArray.sort((a, b) => {
    return a - b
})

let pushArray = sortArray.reduce((acc, num) => {

    return acc.concat(num)
}, [])



/* 
let start = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20, '2', '3'];
let strings = start.filter(v => typeof(v) === 'string');
let notStrings = start.filter(v => typeof(v) !== 'string');
let sortedNotStrings = notStrings.sort((a,b) => a > b);
let grouped = sortedNotStrings.reduce((acc, value) =>
{
  if(acc.length > 0)
  {
    if(acc[0][0] === value)
    {
      acc[0].push(value);
    }
    else
    {
      acc.unshift([value]);
    }
  }
  else
  {
    acc.unshift([value]);
  }
  return acc;
}, []);

let sortedGrouped = grouped.sort((g1, g2) => g1[0] > g2[0]);
let withStrings = [sortedGrouped, strings];

console.log(withStrings);

let lonelySingleItems = sortedGrouped.map(arr => arr.length > 1 ? arr : arr[0]);

console.log([lonelySingleItems, strings]);

*/



let start = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20, '2', '3'];
let strings = start.filter(v => typeof(v) === 'string');
let notStrings = start.filter(v => typeof(v) !== 'string');
let sortedNotStrings = notStrings.sort((a, b) => a > b);
let grouped = sortedNotStrings.reduce((acc, value) => {
    /*   if(acc.length > 0)
      {
        if(acc[0][0] === value)
        {
          acc[0].push(value);
        }
        else
        {
          acc.unshift([value]);
        }
      }
      else
      {
        acc.unshift([value]);
      }
      return acc; */

    if (acc.length > 0 && acc[0][0] === value) {
        acc[0].push(value)
    } else {
        acc.unshift([value]);

    }
    return acc




}, []);

let sortedGrouped = grouped.sort((g1, g2) => g1[0] > g2[0]);
let withStrings = [sortedGrouped, strings];

console.log(withStrings);

let lonelySingleItems = sortedGrouped.map(arr => arr.length > 1 ? arr : arr[0]);

console.log([lonelySingleItems, strings]);