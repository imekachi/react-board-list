import React from 'react';
import ReactDOM from 'react-dom';

import BoardListApp from './containers/BoardListApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BoardListApp />, document.getElementById('app-root'));
registerServiceWorker();
