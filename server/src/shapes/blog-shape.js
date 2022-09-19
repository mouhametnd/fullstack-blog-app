const { ObjectId } = require('mongodb');

const blogShape = ({ title, description, userCreator }) => {
  return {
    title,
    description,
    _id: ObjectId(),
    likes: 0,
    dislikes: 0,
    userCreator,
    lastUpdate: new Date(),
  };
};

module.exports = {
  blogShape
  }
