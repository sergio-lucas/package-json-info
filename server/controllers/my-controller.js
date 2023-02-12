'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-package-json-info')
      .service('myService')
      .getWelcomeMessage();
  },
});
