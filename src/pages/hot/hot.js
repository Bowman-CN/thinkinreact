import React, { Component } from "react";
import "./hot.less";
import FeedTile from "../../components/feed/feed-tile";
import Loading from "../../components/loading/loading";
import { Alert, Button } from "reactstrap";
import {
  AxiosProvider,
  Request,
  Get,
  Delete,
  Head,
  Post,
  Put,
  Patch,
  withAxios
} from "react-axios";

class Hot extends Component {
  render() {
    let dtStr = new Date();
    let feeds = [];
    const feed = {
      body: "no message has been loaded",
      link: "javascript:void(0)",
      image: "",
      timestamp: dtStr.toLocaleString(),
      author: "Paperboy",
      hasImage: false
    };
    return (
      <Get url="https://localhost/apis/infos/hot" params={{ page: 0, size: 5 }}>
        {(error, response, isLoading, makeRequest, axios) => {
          if (error) {
            return (
              <div className="text-center">
                <Loading />
                <p className="mt-5">
                  Loading request failed, see the reason below:
                </p>
                <Alert color="light">{error.message}</Alert>
                <hr className="my-2" />
                Try it again?
                <Button
                  color="info"
                  size="sm"
                  className="ml-3"
                  onClick={() => makeRequest({ params: { reload: true } })}
                >
                  Retry
                </Button>
              </div>
            );
          } else if (isLoading) {
            return <Loading />;
          } else if (response !== null) {
            if (response.data !== null) {
              let dataCol = response.data;
              for (let item of dataCol.content) {
                console.log(item);
                feeds.push(<FeedTile {...item} />);
              }
            }
            return feeds;
          }
          return <div>Default message before request is made.</div>;
        }}
      </Get>
    );
  }
}

export default Hot;
