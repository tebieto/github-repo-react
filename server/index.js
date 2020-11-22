const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const enforce = require('express-sslify');
const request = require('request');
const { GITHUB_API_URL, GITHUB_REQUEST_OPTIONS } = require('./utils');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;
const http = require('http').createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
if (process.env.NODE_ENV === 'production') app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(cors());

http.listen(port, error => {
    if(error) throw error;
    console.log('Server running on port ' + port);
});

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.post('/api/key/github', (req, res) => {
    const key = process.env.GITHUB_API_KEY;
    res.send({ key });
});

app.post('/api/github/user', (req, res) => {
    const key = process.env.GITHUB_API_KEY;
});


request(GITHUB_API_URL, GITHUB_REQUEST_OPTIONS, (res, body, error) => {
    console.log({res, error, body});
});