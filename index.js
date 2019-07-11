const server = require('./api/server.js');


server.listen(port, () => {
  console.log(`*** Server Running on http://localhost:${port} ***`);
});
