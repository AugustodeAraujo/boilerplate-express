import Router from 'express';
import { version } from './middlewares/version'

const routes = new Router();


// Entry API
routes.get('/', (req, res) =>{
  res.send('Hello World')
});


export default routes;
