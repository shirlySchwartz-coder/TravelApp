const express = require('express');
const cors = require('cors');
const port = 3001;

const server = express();

server.listen(3001, () => console.log(`Listening on http://localhost:${port}`));
