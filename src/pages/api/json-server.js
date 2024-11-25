// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json'); // db.jsonを指定
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// server.use(router);

// module.exports = server;
// import jsonServer from 'json-server';

// const server = jsonServer.create();
// const router = jsonServer.router('db.json'); // プロジェクトのルートにdb.jsonを置く
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// server.use(router);

// export default (req, res) => {
//   server.emit('request', req, res);
// };
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const dbFilePath = path.resolve('./db.json'); // プロジェクトのルートにあるdb.jsonを読み込む

  try {
    const data = fs.readFileSync(dbFilePath, 'utf8');
    const jsonData = JSON.parse(data);

    res.status(200).json(jsonData); // JSONデータを返す
  } catch (error) {
    console.error('Error reading db.json:', error);
    res.status(500).json({ error: 'Failed to read the database file' });
  }
}
