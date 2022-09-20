const { ObjectId } = require('mongodb');

const blogShape = ({ title, description, userCreator }) => {
  return {
    title,
    description,
    _id: ObjectId(),
    upvotes: 0,
    userCreator,
    lastUpdate: new Date(),
  };
};

module.exports = {
  blogShape
  }
