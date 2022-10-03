const { Type } = require('@sinclair/typebox');
const Ajv = require('ajv');
const addErrors = require('ajv-errors');
const ajv = new Ajv({ allErrors: true });
addErrors(ajv);
const userNameSchema = Type.Object({
  name: Type.String({
    minLength: 3,
  }),
});

const userNameDTOValidator = ajv.compile(userNameSchema);

module.exports = {
  userNameDTOValidator,
};
