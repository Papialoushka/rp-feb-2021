const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

const isDevMode = process.env.NODE_ENV !== 'production';

module.exports = () => isDevMode ? devConfig : prodConfig;
