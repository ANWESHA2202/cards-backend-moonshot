const express = require('express');
const cors = require('cors');


const app = express();

// Enable CORS for all routes
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const port = 3000; // Port number
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});