const { Router } = require('express');
const { signInController } = require('../controllers/auth/sign-in-controller');
const { signInMiddleware } = require('../middlewares/auth/sign-in-middleware');

const signInRoute = Router();
signInRoute.use(signInMiddleware);
signInRoute.post('/', signInController);

module.exports = {
  signInRoute,
};
