module.exports = function(options) {
    var derby = require('derby');
    var scripts;
    if (options && options.modules) {
        scripts = options.modules.map(function(item) {
            return __dirname + '/bower_components/bootstrap/js/' + item + '.js';
        });
    } else {
        scripts = [__dirname + '/bower_components/bootstrap/dist/bootstrap.min.js'];
    }
    derby.on('store', function(store) {
        store.on('bundle', function(browserify) {
            scripts.forEach(function(script) {
                browserify.add(script);
            });
        });
    });
};