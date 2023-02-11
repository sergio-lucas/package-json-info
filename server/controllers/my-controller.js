'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('package-json-info')
      .service('myService')
      .getWelcomeMessage();
  },
});
