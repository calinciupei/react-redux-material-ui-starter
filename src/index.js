import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// containers
import InitApp from './containers/initApp/initApp.component';

// components
import MainTemplate from './components/mainTemplate/mainTemplate.component';

// reducers
import indexReducers from './reducers/index.reducer';

// pages
import HomePage from './pages/HomePage/index';
import AboutUs from './pages/AboutUs/index';

// styles
import 'typeface-roboto';
import './style/main.scss';

const rootNode = document.getElementById('dom-r-root');
const middleware = [thunk];

/* eslint-disable */
if (ENVIRONMENT === 'development') {
  const createLogger = require('redux-logger').createLogger;
  middleware.push(
    createLogger({
      collapsed: false
    })
  );
}
/* eslint-disable */

const store = createStore(indexReducers, applyMiddleware(...middleware));

render(
  <Provider store={store}>
    <InitApp>
      <Router>
        <MainTemplate>
          <Route path='/' exact={true} component={HomePage} />
          <Route path='about' component={AboutUs} />
        </MainTemplate>
      </Router>
    </InitApp>
  </Provider>,
  rootNode
);
