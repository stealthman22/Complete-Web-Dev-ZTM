 // Push results of forEach into a new array

 const array = [1, 2, 3, 10, 16];
 // Placeholder array
 const double = []
 const newArray = array.forEach((num) => {
     double.push(num * 2);
 })
 console.table('forEach', double);


 // map, filter, reduce

 //const mapArray = array.map((num) => {
 //  return num * 2;
 //});

 const mapArray = array.map(num => num + 2);

 console.table('map', mapArray);

 // filter

 const filterArray = array.filter(num => num > 5);
 console.table('filter', filterArray);

 const array = [1, 2, 3, 10, 16];
 // reduce
 // takes in an accumulator and then the param
 const reduceArray = array.reduce((accumulator, num) => {
     return accumulator + num

 }, 7);

 console.table('reduce', reduceArray);