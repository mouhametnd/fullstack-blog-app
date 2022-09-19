const { Type } = require('@sinclair/typebox');
const Ajv = require('ajv');
const addErrors = require('ajv-errors');
const ajv = new Ajv({ allErrors: true });
addErrors(ajv);

const addBlogSchema = Type.Object({
    title: Type.String({
      minLength: 3,
    }),

    description: Type.String({
      minLength: 3,
    }),
});

const addBlogDTOValidator = ajv.compile(addBlogSchema);

module.exports = {
  addBlogDTOValidator,
};
