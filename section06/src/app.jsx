// new app.jsx

import React from 'react';
import ReactDOM from 'react-dom';

console.log('app.jsx engage!')

const t = React.createElement('p', {}, 'ff');
ReactDOM.render(t, document.getElementById('app'));
