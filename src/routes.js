import Router from 'express';
import { version } from './middlewares/version'

const routes = new Router();


// Entry API
routes.get('/', version);


export default routes;
