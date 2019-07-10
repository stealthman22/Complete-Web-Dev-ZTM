var database = [{
    username: 'Joel',
    password: '278393'
}]

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

var userNamePrompt = prompt('Please entr your user name \u{1F60A}');
var passwordPrompt = prompt('Please enter your password   \u{1F47E}');


function signIn(user, pass) {
    if (user === database[0].username &&
        pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert('Sorry wrong username or password!')
    }
}

signIn(userNamePrompt, passwordPrompt);