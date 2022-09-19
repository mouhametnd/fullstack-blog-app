const { Type } = require('@sinclair/typebox');
const Ajv = require('ajv');
const addErrors = require('ajv-errors');
const { ajvRegex } = require('../constants/ajv-regex');
const ajv = new Ajv({ allErrors: true });
addErrors(ajv);
const signInSchema = Type.Object({
  username: Type.String({
    pattern: ajvRegex.username,
  }),

  password: Type.String({
    pattern: ajvRegex.password,
  }),

  name: Type.String({
    minLength: 3,
  }),
});

const signInDTOValidator = ajv.compile(signInSchema);

module.exports = {
  signInDTOValidator,
};
// export { signInDTOValidator };
