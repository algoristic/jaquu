import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'

import icons from './assets/icons';
import App from './components/App'
import './index.css'
import './util.css'

icons.load();
WebFont.load({
    google: {
        families: ['Quicksand:500,700', 'sans-serif']
    }
});
Notification.requestPermission();
document.title = 'Jaquu - Algoristic Timer';
ReactDOM.render(<App/>, document.querySelector('#root'));
