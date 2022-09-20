const { Router } = require('express');
const { addBlogController } = require('../controllers/blogs/add-blog-controller');
const { blogController } = require('../controllers/blogs/blog-controller');
const { blogsController } = require('../controllers/blogs/blogs-controller');
const { delBlogController } = require('../controllers/blogs/del-blog-controller');
const { updateBlogController } = require('../controllers/blogs/update-blog-controller');
const { blogDTOMiddleware } = require('../middlewares/blogs/blog-dto-middleware');
const { checkBlogCreatorMiddleware } = require('../middlewares/blogs/check-blog-creator-middleware');
const { jwtVerifierMiddleware } = require('../middlewares/auth/jwt-verifier-middleware');
const { usernameValidatorMiddleware } = require('../middlewares/auth/username-validator-middleware');

const blogsRoute = Router();

// make it open to anyone
blogsRoute.get('/', blogsController);
blogsRoute.get('/:blogId', blogController);

blogsRoute.use(jwtVerifierMiddleware);
blogsRoute.use(usernameValidatorMiddleware);
blogsRoute.use(['/add', '/update/:blogId'], blogDTOMiddleware);
blogsRoute.use(['/del/:blogId', '/update/:blogId'], checkBlogCreatorMiddleware);

blogsRoute.post('/add', addBlogController);
blogsRoute.delete('/del/:blogId', delBlogController);
blogsRoute.patch('/update/:blogId', updateBlogController);

module.exports = {
  blogsRoute,
};
