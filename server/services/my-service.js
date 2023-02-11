'use strict';

module.exports = ({ strapi }) => ({
  getWelcomeMessage() {
    let {dependencies, ...rest} = require(`${strapi.dirs.dist.root}/package.json`);
    return rest;
  },
});
