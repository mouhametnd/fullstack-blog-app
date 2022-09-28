const { jwtVerify } = require('jose');
const { unauthorizedSender } = require('../../utils/unauthorized-sender');

const jwtVerifierMiddleware = async (req, res, next) => {
  
  try {
    const userToken = req.headers.authorization;
    const textEncoder = new TextEncoder();
    const verified = await jwtVerify(userToken, textEncoder.encode(process.env.JWT_PRIVATE_KEY));
    
    res.locals.verified = verified;
    next()
  } catch (err) {
    unauthorizedSender(res)
  }
};

module.exports ={
  jwtVerifierMiddleware
}