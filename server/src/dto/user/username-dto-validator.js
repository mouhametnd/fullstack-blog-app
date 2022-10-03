const { Type } = require('@sinclair/typebox');
const Ajv = require('ajv');
const addErrors = require('ajv-errors');
const { ajvRegex } = require('../../constants/ajv-regex');
const ajv = new Ajv({ allErrors: true });
addErrors(ajv);

const usernameSchema = Type.Object({
  username: Type.String({
    pattern: ajvRegex.username,
  }),


});

const usernameDTOValidator = ajv.compile(usernameSchema);

module.exports = {
  usernameDTOValidator,
};
