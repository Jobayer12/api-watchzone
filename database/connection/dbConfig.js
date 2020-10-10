const dbEngine = 'production';
const config = require("./knexfile")[dbEngine];
module.exports = config;