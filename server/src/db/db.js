const { MongoClient } = require('mongodb');
let db = null;
const connectToDb = async cb => {
  try {
    const connection = await MongoClient.connect(process.env.MONGODB_URL);
    db = connection.db()
// db.createCollection('users')
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
