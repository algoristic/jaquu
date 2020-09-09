import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'

import icons from './assets/icons';
import App from './components/App'
import './index.css'

WebFont.load({
    google: {
        families: ['Quicksand:500,700', 'sans-serif']
    }
});
ReactDOM.render(<App/>, document.querySelector('#root'));
