import { Router } from 'express';

const orderRouter = Router();

orderRouter.route('/').get(require('./get').default);
orderRouter.route('/').post(require('./create').default);

export default orderRouter;
