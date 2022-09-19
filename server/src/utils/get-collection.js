const { getDb } = require('../db/db');

const getCollection = collectionName => getDb().collection(collectionName);


module.exports = {
  getCollection
}