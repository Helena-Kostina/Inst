import React, { Component } from "react";
import User from "./User";

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <User
          src="http://okhtalab.ru/files/2017/05/img-david-lynch-01-_184117216071.jpg"
          alt="men"
          name="Scott"
          min={true}
        />
        <img src={this.props.src} alt={this.props.alt}></img>
        <div className="post__name">some account</div>
        <div className="post__descr">
          The National Geographic Quest, National Geographic Venture, and
          National Geographic Sea Bird are each equipped with a fleet of
          expedition landing craft and kayaks, allowing for in-depth exploration
          of icebergs, calving glaciers, and hidden coves.
        </div>
      </div>
    );
  }
}
