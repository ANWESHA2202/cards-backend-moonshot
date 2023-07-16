const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

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

app.post('/get-products', async(req, res) => {
    try {
        const response = await axios.post(
            'https://devcore02.cimet.io/v1/plan-list', {
                "session_id": "eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9"
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Api-key': process.env.GENERATE_TOKEN_API_KEY,
                    'Auth-token': req.body.token
                },

            }
        );
        const resp_data = response.data;
        // console.log(resp_data);
        res.status(200).json(resp_data);
    } catch (err) {
        // console.log(err.message)
        res.status(500).json({ message: err.message });
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