require('dotenv').config(); // Load .env variables

const express = require('express');


const app = express();
const port = process.env.PORT //|| 3000; // Use PORT from .env or default to 3000

app.use(express.json()); // Middleware to parse JSON bodies

app.post('/user', (req, res) => {
    const {name, email} = req.body; // Destructure name and email from request body
    if (!name||!email) return res.status(400).json({error: 'Name and email are required'}); // Basic validation
    //console.log(req.body); // Logs the received JSON body
    //simulating DB save
	res.status(201).json({message: `Hello, ${name}!`}); // req.body now available - message back the received JSON body
	});


app.get('/', (req, res) => {
	res.send('My Week 2 API!');
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id; // Access route parameter
    console.log(`${id} <br\> User ${id} profile`); // Log to console with line break
	res.send(`${id} <br\> User ${id} profile`);
});

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});

// At the end of the file (after routes)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error:'Something went wrong!'});
});

// Example route that throws
app.get("/fail", (req, res) => {
    throw new Error("Oops, server error! please try again later."); //caught by middleware  
})