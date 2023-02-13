'use strict';

module.exports = ({ strapi }) => ({
  getPackageJSON() {
    let {dependencies, ...rest} = require(`${strapi.dirs.dist.root}/package.json`);
    return rest;
  },
});
