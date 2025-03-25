

const express = require('express');
const app = express(); 


app.use((req, res, next) => {
    console.log('First Middleware');
    next(); 
});


app.use((req, res) => {
    console.log('Second Middleware');
    res.status(200).send({ message: 'Hello, World!' }); 
});


const port = 7000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});