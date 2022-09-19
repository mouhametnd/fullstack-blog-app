const { Router } = require('express');
const { addBlogController } = require('../controllers/blogs/add-blog-controller');
const { blogController } = require('../controllers/blogs/blog-controller');
const { blogsController } = require('../controllers/blogs/blogs-controller');
const { delBlogController } = require('../controllers/blogs/del-blog-controller');
const { addBlogDTOMiddleware } = require('../middlewares/blogs/add-blog-dto-middleware');
const { checkBlogCreatorMiddleware } = require('../middlewares/blogs/check-blog-creator-middleware');
const { jwtVerifierMiddleware } = require('../middlewares/jwt-verifier-middleware');

const blogsRoute = Router();

// make it open to anyone
blogsRoute.get('/', blogsController);
blogsRoute.get('/:blogId', blogController);

blogsRoute.use(jwtVerifierMiddleware);
blogsRoute.post('/add', addBlogDTOMiddleware, addBlogController);


blogsRoute.delete('/del/:blogId', checkBlogCreatorMiddleware, delBlogController);

module.exports = {
  blogsRoute,
};
