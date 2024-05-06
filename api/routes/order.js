import { Router } from 'express';
import orderController from '../controllers/order.js';
import { asyncRoute } from '../utils/errors.js';
import { authenticateToken } from '../middlewares/checkToken.js';
import checkRole from '../middlewares/checkRoles.js';
import roles from '../config/roles.js';

const router = Router();

// router
//     .route('/getProfile')
//     .get(authenticateToken, checkRole([roles.DRIVER, roles.ADMINISTRATOR]), asyncRoute(orderController.getProfile));
router
    .route('/createOrder')
    .post(authenticateToken, checkRole([roles.DRIVER, roles.ADMINISTRATOR]), asyncRoute(orderController.createOrder));

export default router;
