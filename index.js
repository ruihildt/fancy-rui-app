require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT;
const key = process.env.API_KEY;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n);
});
