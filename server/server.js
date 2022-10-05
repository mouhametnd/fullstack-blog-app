const express = require('express');
const dotenv = require('dotenv');
const app = express();
const { connectToDb } = require('./src/db/db');
const { signInRoute } = require('./src/routes/sign-in-route');
const { logInRoute } = require('./src/routes/log-in-route');
const { blogsRoute } = require('./src/routes/blogs');
const { userRoute } = require('./src/routes/user-route');
dotenv.config({
  path: './src/.env',
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/sign-in', signInRoute);
app.use('/api/log-in', logInRoute);
app.use('/api/blogs', blogsRoute);
app.use('/api/user', userRoute);

connectToDb(() => app.listen(process.env.PORT));
