const { SignJWT } = require('jose');

const createUserToken = async (username, name) => {
  const textEncoder = new TextEncoder();
  const JWTConstructor = new SignJWT({ username, name });
  const jwt = await JWTConstructor.setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(textEncoder.encode(process.env.JWT_PRIVATE_KEY));

  return jwt;
};

module.exports = {
  createUserToken,
};
