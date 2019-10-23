import React, { Component } from "react";
import Post from "./Post";

export default class Posts extends Component {
  render() {
    return (
      <div className="left">
        <Post
          src="https://russorosso.ru/wp-content/uploads/2016/09/2-1.jpg"
          alt="post"
        />
        <Post
          src="http://media.filmz.ru/photos/full/filmz.ru_f_219924.jpg"
          alt="post2"
        />
      </div>
    );
  }
}
