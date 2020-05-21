import React, { Component } from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"



class HaleyPage extends Component {
  state = {
    posts: [],
    media: []
  }
  componentDidMount() {
    console.log('hi, haley page mounted');
    //get all posts
    fetch('https://cometlot.com/wp-json/wp/v2/posts')
    .then(results => results.json())
    .then(data => {
      console.log(data);
      this.setState({
        posts: data
      })})
    .catch(error => console.log('something went wrong while fetching posts', error));
    //get all media
    fetch('https://cometlot.com/wp-json/wp/v2/media')
      .then(results => results.json())
      .then(data => {
        console.log(data);
        this.setState({
          media: data
        })
      })
      .catch(error => console.log('something went wrong while fetching posts', error));  
  }

  render() {
    return (
      <Layout>
        <SEO title="TEST" />
        <h1>Haley Page</h1>
        <p>Try the WP API stuff here!</p>
        {this.state.posts[0]&&
          <>
            {this.state.posts.map((post) => (
              <p key={post.id}>{post.title.rendered}</p>
            ))}
            <h3>can i get the image out?</h3>
            {this.state.media[0]&&
              <img src={this.state.media[0].guid.rendered} />
            }
          </>
        }
      </Layout>
    )
  }
}




export default HaleyPage




