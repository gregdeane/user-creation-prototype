import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('./mock/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(4444, function () {
  console.log('JSON Server is running');
});
