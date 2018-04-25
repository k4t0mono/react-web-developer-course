'use strict';

/* app.js */

console.log('app.js engage');

var template = React.createElement(
  'p',
  { id: 'affs' },
  'This is JSX from `app.js`!'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
