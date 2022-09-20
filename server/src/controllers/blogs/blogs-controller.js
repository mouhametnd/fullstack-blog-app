const { getCollection } = require('../../utils/get-collection');
// a service job
const blogsController = async (req, res) => {
  const blogsCollection = getCollection('blogs');
  try {
    const result = await blogsCollection.find({}).toArray();
    res.json({ result });
  } catch (err) {
    res.status(406);
    res.json({ error: 'Error Fetching blogs ' });
  }
};

module.exports = {
  blogsController,
};
