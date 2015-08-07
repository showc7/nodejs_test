// File: controller/app/list.js

/**
 * Normal Get Request, Support urls:
 * 1. /app/list => page: undefined | second: undefind
 * 2. /app/list/0 => page: 0 | second: undefined
 * 3. /app/list/1.html => page: 1 | second: undefined
 * 4. /app/list/1/a => page: 1 | second: a
 */
exports.index = function(req, res, next, page, second) {
    res.send('Page: ' + page + ' Second: ' + second);
    res.end();
};

/**
 * @Caution:
 *  if you want to use index with other(not get) request method.
 *  you must use full path: /app/list/index/1/a
 *  otherwise, request will be transfered to index function.
 *  Also, if there is not matched function, such as '/app/test'(no `exports.test = function(){}` in app.js),
 *  Then, router will send this request to `app.index` function,
 *  And put the `test` as the four argument, like `function(req, res, next, test)`
 */

/**
 * For POST Request. Support urls:
 * 1. /app/list/set => page: undefined | second: undefind
 * 2. /app/list/set/0 => page: 0 | second: undefined
 * 3. /app/list/set/1 => page: 1 | second: undefined
 * 4. /app/list/set/1/a => page: 1 | second: a
 */
exports.postSet = function(req, res, next, page, second) {
    res.send('Page: ' + page + ' Second: ' + second);
    res.end();
}

/**
 * For PUT Request. Support urls:
 * 1. /app/list/setapp => page: undefined | second: undefind
 * 2. /app/list/setapp/0 => page: 0 | second: undefined
 * 3. /app/list/setapp/1 => page: 1 | second: undefined
 * 4. /app/list/setapp/1/a => page: 1 | second: a
 */
exports.putSetapp = function(req, res, next, page, second) {
    res.send('Page: ' + page + ' Second: ' + second);
    res.end();
}

// And also support any method from request header.
// like: exports.deleteApp = function(req, res, next, ...) { ... } 
