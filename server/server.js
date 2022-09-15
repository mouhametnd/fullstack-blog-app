const express = require('express');
const app = express();
const { CORSMiddleware } = require('./src/middlewares/CORSMiddleware');
const dotenv = require('dotenv');
const { connectToDb } = require('./src/db/db');

dotenv.config({
  path: '.env',
});
app.use(CORSMiddleware);

connectToDb(() => app.listen(process.env.PORT));
