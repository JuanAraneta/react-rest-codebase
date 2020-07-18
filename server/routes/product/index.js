import { Router } from 'express';

import checkAuth from '../../middleware/checkAuth';

const apiProductRouter = Router();

apiProductRouter.route('/').get(require('./get').default);
apiProductRouter.route('/').delete(require('./delete').default);
apiProductRouter.route('/').post(checkAuth, require('./create').default);
apiProductRouter.route('/').patch(require('./update').default);

export default apiProductRouter;
