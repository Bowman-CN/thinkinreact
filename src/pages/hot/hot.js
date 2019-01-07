import React, { Component } from "react";
import "./hot.less";
import FeedTile from "../../components/feed/feed-tile";
import Loading from "../../components/loading/loading";
import { Alert, Button } from "reactstrap";
import axios from "axios";

class Hot extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 0, size: 5, feeds: [], error: null, loading: true };
  }
  componentDidMount() {
    this.loadFeeds();
    window.addEventListener("scroll", this.scrollHandler.bind(this), {
      passive: true
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler.bind(this));
  }

  loadFeeds() {
    let self = this;
    // this.setState({ loading: true });
    axios
      .get("https://localhost/apis/infos/hot", {
        params: {
          page: this.state.page,
          size: this.state.size
        }
      })
      .then(function(response) {
        console.log(response);
        self.setState({ error: null });
        if (response.data !== null) {
          //   let dataCol = response.data;
          self.setState({
            feeds: self.state.feeds.concat(response.data.content)
          });
          if (response.data.last === false) {
            self.setState({
              page: self.state.page + 1
            });
          }
        }
      })
      .catch(function(error) {
        console.error(error);
        self.setState({ error: error });
      })
      .then(function() {
        // always executed
        self.setState({ loading: false });
      });
  }

  scrollHandler(e) {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 1
    ) {
      this.loadFeeds();
    }
  }

  /**
   * {
  // `data` is the response that was provided by the server
  data: {},

  // `status` is the HTTP status code from the server response
  status: 200,

  // `statusText` is the HTTP status message from the server response
  statusText: 'OK',

  // `headers` the headers that the server responded with
  // All header names are lower cased
  headers: {},

  // `config` is the config that was provided to `axios` for the request
  config: {},

  // `request` is the request that generated this response
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance the browser
  request: {}
}
   */

  render() {
    let dtStr = new Date();
    // let feeds = [];
    const feed = {
      body: "no message has been loaded",
      link: "#",
      image: "",
      timestamp: dtStr.toLocaleString(),
      author: "Paperboy",
      hasImage: false
    };
    if (this.state.error) {
      return (
        <div className="text-center">
          <Loading />
          <p className="mt-5">Loading request failed, see the reason below:</p>
          <Alert color="light">{this.state.error.message}</Alert>
          <hr className="my-2" />
          Refresh page or Try it again?
          <Button
            color="info"
            size="sm"
            className="ml-3"
            onClick={this.loadFeeds()}
          >
            Retry
          </Button>
        </div>
      );
    }
    if (this.state.feeds.length === 0) {
      return <FeedTile {...feed} />;
    }

    let feeds = this.state.feeds.map((item, i) => (
      <FeedTile {...item} key={i} />
    ));
    return (
      <div>
        {feeds}
        {this.state.loading && <Loading />}
      </div>
    );
  }
}

export default Hot;
