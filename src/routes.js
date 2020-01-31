import { Router } from 'express';

import RecipientsController from './app/controllers/RecipientsController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/session', SessionController.store);

routes.use(authMiddleware);
routes.post('/recipients', RecipientsController.store);
routes.put('/recipients/:id', RecipientsController.update);

export default routes;
