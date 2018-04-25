import * as React from 'react';
import App from './components/App/app';
import {Provider} from 'mobx-react';
import {AppStore} from './stores/appStore';
import * as ReactDOM from 'react-dom';
require('admin-lte/dist/css/AdminLTE.css');
require('admin-lte/dist/css/skins/skin-blue.css');
require('./assets/css/styles.css');

const appStore = new AppStore();
ReactDOM.render(
    <Provider appStore={appStore}>
       <App/>
    </Provider>,
    document.getElementById('root'),
);
