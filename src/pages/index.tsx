import React from 'react';
import logo from './logo.svg';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './home';
import TechPage from './tech';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <React.Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/tech" component={TechPage} exact/>
            <Route path="*" exact>
              <Redirect to="/"/>
            </Route>
          </Switch>
        </React.Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
