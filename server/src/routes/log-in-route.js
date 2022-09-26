const { Router } = require('express');
const { logInController } = require('../controllers/auth/log-in-controller');
const { CORSPublicEndpointsMiddleware } = require('../middlewares/auth/cors-public-endpoints-middleware');
const { logInMiddleware } = require('../middlewares/auth/log-in-middleware');

const logInRoute = Router();
logInRoute.use(CORSPublicEndpointsMiddleware)
logInRoute.use(logInMiddleware);
logInRoute.post('/', logInController);


module.exports = {
  logInRoute,
};
