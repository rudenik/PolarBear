import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from "./store/reducer";//import the logic js aka reducer


const store=createStore(reducer);//this connects the store to the logic so you can use it later in your app
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));//wrap the provider around your main at root level
registerServiceWorker();
