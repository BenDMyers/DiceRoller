import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './reducers';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import App from './components/App';

ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>,
	document.getElementById('root')
);
