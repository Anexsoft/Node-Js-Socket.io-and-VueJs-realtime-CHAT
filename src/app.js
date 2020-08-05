const express = require('express');

const app = express();

app.use(express.static(__dirname + '/../public'));

const http = require('http').createServer(app);

const socket = require('./socket');
socket(http);

module.exports = http;