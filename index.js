const server = require('./api/server.js');

// Haha
const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`*** Server Running on http://localhost:${port} ***`);
});
