const cors = require('cors');

const CORSPublicEndpointsMiddleware = cors({origin: '*'});

module.exports = {
  CORSPublicEndpointsMiddleware,
};
