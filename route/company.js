import { Router } from 'express';
import company from '../controllers/company';

const companyRoutes = Router();

// create a user
companyRoutes.get('/company', company.getCompany);

export default companyRoutes;
