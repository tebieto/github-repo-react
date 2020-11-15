const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;
const http = require('http').createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(cors());

http.listen(port, error => {
    if(error) throw error;
    console.log('Server running on port ' + port);
});

app.get('*', (req, res) => {
	res.send('');
});

app.post('/api/key', (req, res) => {
	res.send({ key: process.env.GITHUB_API_KEY });
});