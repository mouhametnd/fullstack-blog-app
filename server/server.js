const express = require('express');
const dotenv = require('dotenv');
const app = express();
const { CORSMiddleware } = require('./src/middlewares/cors-middleware');
const { connectToDb } = require('./src/db/db');
const { signInRoute } = require('./src/routes/sign-in-route');
const { logInRoute } = require('./src/routes/log-in-route');
const { blogsRoute } = require('./src/routes/blogs');
dotenv.config({
  path: '.env',
});
console.clear();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(CORSMiddleware);
app.use('/sign-in', signInRoute)
app.use('/log-in', logInRoute)
app.use('/blogs', blogsRoute)

connectToDb(() => app.listen(process.env.PORT));
