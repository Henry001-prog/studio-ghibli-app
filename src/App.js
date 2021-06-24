import React, { useState } from 'react';
import './App.css';

import Home from './pages/Home';
import NotFound from './pages/NotFound';



import history from './History';

import { Router, Switch, Route, Redirect } from 'react-router-dom';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

//import FlashMessage from "react-native-flash-message";

import rootReducer from '../src/store/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));

function App() {
  const [token, setToken] = useState();
  console.log('Token:', token);

  return (
    /*!token ?
    <Provider store={store}>
      <Router history={history}>
        <Route>
          <Redirect to="/" />
          <Home setToken={setToken} />
        </Route>
      </Router>
    </Provider>

    :*/

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
