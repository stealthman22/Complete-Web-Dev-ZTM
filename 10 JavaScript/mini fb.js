var database = [{
        username: 'joel',
        password: '54321'
    },
    {
        username: 'sally',
        password: '12345'
    },
    {
        username: 'getrude',
        password: '00000'
    },

]

var newsFeed = [{
        username: 'Maggy',
        timeline: 'Such a wonderful day at work'
    },
    {
        username: 'Sally',
        timeline: 'Javascript is such a dear'
    },
    {
        username: 'Mac',
        timeline: 'Mac just bought a macintosh so cool '
    }
]

var userNamePrompt = prompt('Please enter your user name \u{1F60A}');
var passwordPrompt = prompt('Please enter your password   \u{1F47E}');


function isUserValid(user, pass) {
    for (let i = 0; i < database.length; i++) {
        if (database[i].username === user &&
            database[i].password === pass) {
            return true;
        }
        return false;
    }
}

function signIn(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsFeed)
    } else {
        alert('Sorry wrong username or password')
    }

}

signIn(userNamePrompt, passwordPrompt);