import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import TableController from './app/controllers/TableController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.get('/list', UserController.index);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
/** Rotas que exigem estar logado */
routes.put('/users', UserController.update);
routes.post('/addlist', upload.single('file'), TableController.store);
routes.get('/lists', TableController.index);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
