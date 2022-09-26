const express = require('express');
const { Router } = require('express');
const { signInController } = require('../controllers/auth/sign-in-controller');
const { CORSPublicEndpointsMiddleware } = require('../middlewares/auth/cors-public-endpoints-middleware');
const { signInMiddleware } = require('../middlewares/auth/sign-in-middleware');

const signInRoute = Router();
signInRoute.use(CORSPublicEndpointsMiddleware)
signInRoute.use(signInMiddleware);
signInRoute.post('/', signInController);

module.exports = {
  signInRoute,
};
