import { Router } from 'express';
import customerController from '../controllers/customer.js';
import { asyncRoute } from '../utils/errors.js';
import { authenticateToken } from '../middlewares/checkToken.js';
import checkRole from '../middlewares/checkRoles.js';
import roles from '../config/roles.js';

const router = Router();

router
    .route('/createCustomer')
    .post(
        authenticateToken,
        checkRole([roles.DRIVER, roles.ADMINISTRATOR]),
        asyncRoute(customerController.createCustomer)
    );
router
    .route('/getAllCustomers')
    .get(
        authenticateToken,
        checkRole([roles.DRIVER, roles.ADMINISTRATOR]),
        asyncRoute(customerController.getAllCustomers)
    );

export default router;
