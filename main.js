const express = require('express');
const cors = require('cors');
import fetch from 'node-fetch';
require('dotenv').config();

const app = express();

// Enable CORS for all routes
app.use(cors());

//rest api routes

app.post('/generate-token', async(req, res) => {
    try {
        const res = await fetch('https://devcore02.cimet.io/v1/generate-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Api-key': process.env.GENERATE_TOKEN_API_KEY
            },
        })
        const data = await res.json()
        res.status(200).json(data)

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//get request for testing
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const port = 3000; // Port number
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});