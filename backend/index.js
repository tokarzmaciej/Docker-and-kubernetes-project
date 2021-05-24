const express = require('express');
const cors = require('cors')
const app = express();
const students = require('./routes/students');
const subjects = require('./routes/subjects');
const marks = require('./routes/marks');
const actions = require('./routes/actions');

app.use(cors());
app.use(express.json());

app.use('/students', students);
students.use('/:idStudent/subjects', subjects);
students.use('/', marks);
app.use('/actions', actions);


require('dotenv').config();
require('./config/mongodbClient');

const clientRedis = require('./config/redisClient');

clientRedis.on('error', err => {
  console.error('Error connecting to Redis', err);
});
clientRedis.on('connect', () => {
  console.log(`Connected to Redis.`)
});

const port = 5000
app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});