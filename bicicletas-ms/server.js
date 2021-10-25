const http = require('http');
const app = require('./app');
require('dotenv').config();
const port = process.env.PORT || 4000;
console.log(process.env.PORT)

const server = http.createServer(app);

server.listen(port, () => {
  console.log('listening on port ' + port);
});