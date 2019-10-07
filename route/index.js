import express from 'express';
import companyRoutes from './company';

const routes = express.Router();

routes.use(companyRoutes);

export default routes;