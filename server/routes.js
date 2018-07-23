const routes = require ('next-routes')();
routes.add('/betting/:slug','/betting/category');
routes.add('/betting/final/:address','/betting/betting-form');
module.exports = routes;