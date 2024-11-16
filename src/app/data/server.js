const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('todos.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Vercelで必要なポートを指定
server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running');
});
