const app = require('http')
    .createServer((req, res) => res.sendDate('hey there I am active'));

// congigure with env variables dynamically
const PORT = process.env.PORT
app.listen(process.env.PORT, () => {
    console.log(`Server is up on ${PORT} !!`)
})

console.log(PORT)



// congigure with env variables dynamically
const DATABASE_URL = process.env.DATABASE_URL

// env variables
console.log(DATABASE_URL);