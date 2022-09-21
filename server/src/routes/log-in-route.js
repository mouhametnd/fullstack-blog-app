const { Router } = require('express');
const { logInController } = require('../controllers/auth/log-in-controller');
const { logInMiddleware } = require('../middlewares/auth/log-in-middleware');

const logInRoute = Router();
logInRoute.use(logInMiddleware);
logInRoute.post('/', logInController);


module.exports = {
  logInRoute,
};
