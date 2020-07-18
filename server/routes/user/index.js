import { Router } from 'express';

const apiUserRouter = Router();

apiUserRouter.route('/signup').post(require('./create').default);
apiUserRouter.route('/login').post(require('./login').default);
apiUserRouter.route('/users').delete(require('./delete').default);

export default apiUserRouter;
