const express = require('express')
const app = express();

// const db = require('./db');
// const jwtConfig = require('./JWT');




const port = process.env.port || 3000;


app.get('/', (req, res) => {
    res.send("Welcome to the Skill tracking project")
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})