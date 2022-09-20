const { ObjectId } = require('mongodb');

const blogShape = ({ title, description, userCreator }) => {
  return {
    title,
    description,
    _id: ObjectId(),
    votes: { total: 0, likedUsers: [] },
    userCreator,
    lastUpdate: new Date(),
  };
};

module.exports = {
  blogShape,
};
