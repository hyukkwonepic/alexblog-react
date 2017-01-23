import React from 'react';
import { Link } from 'react-router';

class PostList extends React.Component {
  renderPosts(posts) {
    return posts.map((post) => {
      return (
        <div key={post.id}>
          <Link to={"post/" + post.id}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.id}</p>
          <p>{post.content}</p>
        </div>
      );
    });
  }

  render() {
    const posts = this.props.posts;
    return (
      <div>
        {this.renderPosts(posts)}
      </div>
    );
  }
}

export default PostList;
