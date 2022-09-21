const { Router } = require('express');
const { addgetBlogController } = require('../controllers/blogs/add-blog-controller');
const { getBlogController } = require('../controllers/blogs/get-blog-controller');
const { getBlogsController } = require('../controllers/blogs/get-blogs-controller');
const { delgetBlogController } = require('../controllers/blogs/del-blog-controller');
const { updateBlogDetailsController } = require('../controllers/blogs/update-blog-details-controller');
const { blogDTOMiddleware } = require('../middlewares/blogs/blog-dto-middleware');
const { checkBlogCreatorMiddleware } = require('../middlewares/blogs/check-blog-creator-middleware');
const { jwtVerifierMiddleware } = require('../middlewares/auth/jwt-verifier-middleware');
const { usernameValidatorMiddleware } = require('../middlewares/auth/username-validator-middleware');
const { updateBlogVotesMiddleware } = require('../middlewares/blogs/update-blog-votes-middleware');
const { updateBlogVotesController } = require('../controllers/blogs/update-blog-votes-controller');

const blogsRoute = Router();

// make it open to anyone
blogsRoute.get('/', getBlogsController);
blogsRoute.get('/:blogId', getBlogController);

blogsRoute.use(jwtVerifierMiddleware);
blogsRoute.use(usernameValidatorMiddleware);
blogsRoute.use(['/add', '/update/:blogId'], blogDTOMiddleware);
blogsRoute.use(['/del/:blogId', '/update/:blogId'], checkBlogCreatorMiddleware);

blogsRoute.post('/add', addgetBlogController);
blogsRoute.delete('/del/:blogId', delgetBlogController);
blogsRoute.patch('/update/:blogId', updateBlogDetailsController);

blogsRoute.patch('/votes/:blogId', updateBlogVotesMiddleware, updateBlogVotesController)

module.exports = {
  blogsRoute,
};
