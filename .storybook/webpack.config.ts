const path = require('path');

module.exports = async ({ config }) => {
    console.log('hello world')
    config.resolve.alias['@'] = path.resolve(__dirname, '../');
    return config;
};
