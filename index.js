module.exports = function(app, options) {
    if (options && options.styles === 'less') {
        app.loadStyles(__dirname + '/bower_components/bootstrap/less/bootstrap.less');
    } else {
        app.loadStyles(__dirname + '/bower_components/bootstrap/dist/css/bootstrap.min.css');
    }
    var derby = require('derby');
    var bundle = derby.util.serverRequire(module, './bundle-bootstrap');
    if (bundle) { bundle(options); }
};