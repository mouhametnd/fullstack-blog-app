const { Type } = require('@sinclair/typebox');
const Ajv = require('ajv');
const addErrors = require('ajv-errors');
const ajv = new Ajv({ allErrors: true });
addErrors(ajv);

const blogSchema = Type.Object({
    title: Type.String({
      minLength: 3,
    }),

    description: Type.String({
      minLength: 3,
    }),
});

const blogDTOValidator = ajv.compile(blogSchema);

module.exports = {
  blogDTOValidator,
};
