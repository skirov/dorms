'use strict';

var api = require('./controllers/api'),
    index = require('./controllers');

/**
 * Application routes
 */
module.exports = function(app) {

    // Server API Routes
    app.post('/api/stepOne', function(req, res) {
        api.stepOne(req, res);
    });

    app.post('/api/finishRequest', function(req, res) {
        api.finishRequest(req, res);
    });

    // All undefined api routes should return a 404
    app.get('/api/*', function(req, res) {
        res.send(404);
    });

    // All other routes to use Angular routing in app/scripts/app.js
    app.get('/partials/*', index.partials);
    app.get('/*', index.index);
};