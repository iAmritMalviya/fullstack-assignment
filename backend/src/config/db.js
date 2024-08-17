const mongoose = require('mongoose');
const fromEnv = require('../utils/fromenv');
const logger=require('../utils/logger')

mongoose.set('strictQuery', false);

const URI =fromEnv('NOSQL_DATABASE_URL')

const connection = async () => {
  try {
    await mongoose.connect(URI);
    logger.info('Database connected Successfully!');
  } catch (error) {
    logger.error('Error while connecting', error.message);
  }
};

module.exports = connection
