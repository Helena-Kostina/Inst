import React, { Component } from "react";
import InstaService from "../services/instaService"; //с большой буквы так как это класс
import User from "./User";
import ErrorMessage from "./Error";

// поля классов
export default class Posts extends Component {
  InstaService = new InstaService();
  state = {
    posts: [],
    error: false
  };

  //хуки Жизненного цикла: создается, обновлется, умирает, ошибка
  //создался, появился
  componentDidMount() {
    this.updatePosts();
  }
  //подгрузить посты
  updatePosts() {
    this.InstaService.getAllPosts()
      .then(this.onPostsLoaded)
      .catch(this.onError);
  }

  onPostsLoaded = posts => {
    this.setState({
      posts, // posts: posts , по стандврту es6
      error: false
    });

    console.log(this.state.posts);
  };

  onError = error => {
    this.setState({
      error: true
    });
  };

  renderItems(arr) {
    return arr.map(item => {
      const { name, altname, photo, src, alt, descr, id } = item;

      return (
        <div key={id} className="post">
          <User src={photo} alt={altname} name={name} min={true} />
          <img src={src} alt={alt}></img>
          <div className="post__name">{name}</div>
          <div className="post__descr">{descr}</div>
        </div>
      );
    });
  }

  render() {
    const { error, posts } = this.state;

    if (error) {
      return <ErrorMessage />;
    }

    const items = this.renderItems(posts);
    return (
      <div className="left">
        {/* поля класов , чтобы раньше написсать класс нужно использовать слов
        class, метод super */}
        {/* пропсы не изменяемы, а стайты динамически изменяемы */}
        {items}
      </div>
    );
  }
}
