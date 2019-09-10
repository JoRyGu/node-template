const server = require('./config/server');

const port = process.env.PORT || 3000;

server.listen({ port }, () => console.log(`Server is now listening on port ${port}.`));