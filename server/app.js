const express = require('express');
const cors = require('cors');
const port = 3001;

const usersController = require('./controllers/users-controller');
const vacationsController = require('./controllers/vacations-controller');

const server = express();

server.use(cors({ origin: 'http://localhost:3000' }));
server.use(express.json());
server.use('/users', usersController);
server.use('/vacations', vacationsController);

server.listen(3001, () => console.log(`Listening on http://localhost:${port}`));
