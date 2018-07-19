import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home';
import registerServiceWorker from './service-worker';

ReactDOM.render(<Home/>, document.getElementById('root'));
registerServiceWorker();
