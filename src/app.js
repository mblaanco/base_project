import express from 'express';
import cors from 'cors';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    /* O cors define o endereço que pode fazer requisições para a API */
    this.server.use(cors(/* { origin: 'https://rocketseat.com.br' } */));
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
