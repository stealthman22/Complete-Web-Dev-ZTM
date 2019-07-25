// Complete the below questions using this array:
const array = [{
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];



//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const userArray = [];
const loopUser = array.forEach(obj => {
    userArray.push(obj.username + '!');
});

console.log('forEach', userArray);


//Create an array using map that has all the usernames with a "? to each of the 

const mapArray = array.map(obj => obj.username + '?');
console.table('mapArray', mapArray);


//Filter the array to only include users who are on team: red

const filterArray = array.filter(obj => obj.team === 'red');
console.log('filterArray', filterArray)

//Find out the total score of all users using reduce

const totalScore = array.reduce((acc, obj) => {
    return acc + obj.score
}, 0);

console.log('reduce', totalScore);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})

// Sol

// i is index
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => num * 2);
alert(newArray);
console.log(newArray);


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const newArray = array.map(obj => {
    return obj.items.map(obj => obj + '!');

});
console.log(newArray);