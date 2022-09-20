const { Type } = require('@sinclair/typebox');
const Ajv = require('ajv');
const addErrors = require('ajv-errors');
const { ajvRegex } = require('../../constants/ajv-regex');
const ajv = new Ajv({ allErrors: true });
addErrors(ajv);

const logInSchema = Type.Object({
  username: Type.String({
    pattern: ajvRegex.username,
  }),

  password: Type.String({
    pattern: ajvRegex.password,
  }),
});

const logInDTOValidator = ajv.compile(logInSchema);

module.exports = {
  logInDTOValidator,
};
