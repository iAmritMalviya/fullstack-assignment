require('dotenv').config({ path: '.env' });

const fromEnv = (env) => process.env[env]

module.exports = fromEnv
