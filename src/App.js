import React, { Component } from "react";
import "./App.less";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Hot from "./pages/hot/hot";
import Prefs from "./pages/prefs/prefs";
import NoMatch from "./pages/nomatch/nomatch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-content">
          <Switch>
            <Route exact path="/hot" component={Hot} />
            <Route path="/prefs" component={Prefs} />
            {/* when none of the above match, <NoMatch> will be rendered */}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
