const cors = require('cors');

const CORSPrivateEndpointsMiddleware = cors({ origin: process.env.PRIVATE_ENDPOINT });

module.exports = {
  CORSPrivateEndpointsMiddleware,
};
