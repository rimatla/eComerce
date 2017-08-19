import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import NotFound from './components/NotFound/NotFound';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    //pass in routes
    return (
      <div className="App">
          <Header/>
          <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={Shop}></Route>
                  <Route path="/shop" component={Shop}></Route>
                  <Route path="/review" component={OrderReview}></Route>
                  <Route path="*" component={NotFound}></Route>
              </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;

/*<Shop/>*/