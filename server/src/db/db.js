const { MongoClient } = require('mongodb');
let db = null;
const connectToDb = async cb => {
  try {
    await MongoClient.connect(process.env.MONGODB_URL);
    cb();
  } catch (err) {
    console.log(err);
  }
};
const getDb = () => db;

module.exports = {
  getDb,
  connectToDb,
};
