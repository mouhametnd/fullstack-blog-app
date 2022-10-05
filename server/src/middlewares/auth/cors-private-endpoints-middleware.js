const cors = require('cors');

const CORSPrivateEndpointsMiddleware = cors({ origin: 'http://localhost:3300' });

module.exports = {
  CORSPrivateEndpointsMiddleware,
};
