//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}


//Sol

/* function winBattle(points) {
    return points;
}

var experiencePoints = winBattle(true) ? 10 : 1; */


//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
// undefined


//#3 return value when moveCommand("back");
// You arrived home

//#4 return value when moveCommand("right");
//undefined N "you arrived home"

//#5 return value when moveCommand("left");
//undefined

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function foodTimeTable(eat) {
    var eatWhat;
    switch (eat) {
        case 'monday':
            eatWhat = 'beans';
            break;
        case 'tuesday':
            eatWhat = 'rice';
            break;
        case 'wednesday':
            eatWhat = 'oats';
            break;
        case 'thursday':
            eatWhat = 'porridge';
            break;
        case 'friday':
            eatWhat = 'wheat';
            break;
        default:
            eatwhat = 'Please what day is it?'
    }
    return eatWhat;
}