// todo this must be changed for the open endpoonts

const { setBasicCORSHeaders } = require('../../utils/set-basic-cors-headers');

const CORSPrivateEndpointsMiddleware = (_, res, next) => {
  // todo url must be a env variable 
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3300');
  setBasicCORSHeaders(res);
  next();
};

module.exports = {
  CORSPrivateEndpointsMiddleware,
};
