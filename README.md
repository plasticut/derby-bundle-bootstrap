derby-bundle-bootstrap
======================
Application
```javascript
var options = {
    styles: 'less', // 'less' or 'css' - default
    modules: [
          'transition',
          'alert',
          'button',
          'carousel',
          'collapse',
          'dropdown',
          'modal',
          'tooltip',
          'popover',
          'scrollspy',
          'tab',
          'affix'
    ]
};
app.serverUse(module, require('derby-static'));
app.use(require('derby-bundle-font-awesome'), options);
```
Server:
```javascript
...
expressApp.use(app.static(options));
...
```
or
```javascript
var server = require('derby-starter');
var app = require('./app');
server.run(app, { 'static': app.getStaticRoutes() });
```
// example with 'derby-starter' https://github.com/plasticut/derby-tree/tree/master/example-static

Bower and derby-static is requried.