const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

// Enable CORS for all routes
app.use(cors());

//rest api routes

app.post('/generate-token', async(req, res) => {
    try {
        const response = await axios.post(
            'https://devcore02.cimet.io/v1/generate-token', {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Api-key': process.env.GENERATE_TOKEN_API_KEY
                }
            }
        );
        const resp_data = response.data;
        res.status(200).json(resp_data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


//get request for testing
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const port = 3000; // Port number
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});