const { ObjectId } = require('mongodb');

const isIdValid = id => ObjectId.isValid(id);

module.exports  = {isIdValid}
