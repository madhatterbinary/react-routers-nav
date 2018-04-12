import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import VideoCardsPage from './containers/VideoCardsPage/VideoCardsPage';
import PdfCardsPage from './containers/PdfCardsPage/PdfCardsPage';
import PowerpointCardsPage from './containers/PowerpointCardsPage/PowerpointCardsPage';
import ImageCardsPage from './containers/ImageCardsPage/ImageCardsPage';
import ExcelCardsPage from './containers/ExcelCardsPage/ExcelCardsPage';
import WordCardsPage from './containers/WordCardsPage/WordCardsPage';
import AllCardsPage from './containers/AllCardsPage/AllCardsPage';

class App extends Component {

  render () {

    let  routes = (
        <Switch>
          <Route path="/video" component={VideoCardsPage} />
          <Route path="/pdf" component={PdfCardsPage} />
          <Route path="/powerpoint" component={PowerpointCardsPage} />
          <Route path="/image" component={ImageCardsPage} />
          <Route path="/excel" component={ExcelCardsPage} />
          <Route path="/word" component={WordCardsPage} />
          <Route path="/" exact component={AllCardsPage} />
          <Redirect to="/" />
        </Switch>
      );

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;
