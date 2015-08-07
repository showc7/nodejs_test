// File: app.js

var express = require('express'),
    app = express(),
    route = require('express-route-tree');

app.use(route(__dirname + '/controller'));
/*
// Advanced Settings
var fileRouter = ['robots.txt'],
    shortAddress = ['mon', 'tus'],
    regionRoute = { china: { id: '1', name: '中国' } };
app.use(route(__dirname + '/controller', function(req, res, next, controller) {
    var pathname = req.path.substring(1);
    if (~fileRouter.indexOf(pathname)) {
        return res.sendFile(pathname, { maxAge: 3600 * 24 * 1000 });
    } else if (~shortAddress.indexOf(pathname))) {
        // some short address
        return controller.index.season(req, res, next, shortAddress[pathname] + 1);
    } else if (regionRoute[pathname]) {
        return controller.index.region(req, res, next, regionRoute[pathname].id, regionRoute[pathname].name);
    } else {
        return next('No such route.');
    }
});
*/

// try it:
// console.log(route.controller);

app.listen(3000);
