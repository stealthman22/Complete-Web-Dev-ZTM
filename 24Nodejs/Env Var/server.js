const app = require('http')
    .createServer((req, res) => res.sendDate('hey there I am active'));

// congigure with env variables dynamically
const PORT = process.DATABASE_URL
app.listen(process.env.PORT, () => {
    console.log(`Server is up on ${DATABASE_URL} !!`)
})

// env variables
console.log(PORT);