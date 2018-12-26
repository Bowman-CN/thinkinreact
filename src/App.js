import React, { Component } from "react";
import "./App.css";
import GoodLists from "../src/components/goods-list/list";
import  Header  from "../src/components/header/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-content">
          <GoodLists />
        </div>
      </div>
    );
  }
}

export default App;
