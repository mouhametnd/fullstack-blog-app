const { setBasicCORSHeaders } = require('../../utils/set-basic-cors-headers');

const CORSPublicEndpointsMiddleware = (_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  setBasicCORSHeaders(res);
  next();
};

module.exports = {
  CORSPublicEndpointsMiddleware,
};
