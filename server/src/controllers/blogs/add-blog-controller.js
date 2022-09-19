const { addBlogService } = require('../../services/blogs/add-blog-service');

const addBlogController = async (req, res) => {
  const { username, name } = res.locals.verified.payload;
  const userCreator = { username, name };

  const result = await addBlogService({ ...req.body, userCreator });

  if(result.error){
    res.status(506)
    res.json({error: "Server error durring the process, try it again"})
    return 
  }

  res.json({...result})
};


module.exports = {
  addBlogController
}