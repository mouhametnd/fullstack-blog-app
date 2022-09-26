// todo this must be changed for the open endpoonts
// todo url must ve env var
const cors = require('cors');

const CORSPrivateEndpointsMiddleware = cors({ origin: 'http://localhost:3300' });

module.exports = {
  CORSPrivateEndpointsMiddleware,
};
