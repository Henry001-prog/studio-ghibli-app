import React from 'react';
import './App.css';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

import history from './History';
import { Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import rootReducer from '../src/store/reducers';

const composeEnhancers = compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));

function App() {

  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
