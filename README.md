derby-bundle-bootstrap
======================
options = {
    styles: 'less', // or 'css' - default
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
}

app.use(require('derby-bundle-bootstrap'), options);
