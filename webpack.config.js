const developmentConfig = require('./config/webpack.dev');
const productionConfig = require('./config/webpack.prod');

module.exports = (env, args) => {
  switch (args.mode) {
    case 'development':
      return developmentConfig;
    case 'production':
      return productionConfig;
    default:
      throw new Error('No matching configuration was found for the current mode.');
  }
};
