import React, { Component } from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"



class HaleyPage extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    console.log('hi, haley page mounted');
    fetch('https://cometlot.com/wp-json/wp/v2/posts')
    .then(results => results.json())
    .then(data => {
      console.log(data);
      this.setState({
        posts: data
      })})
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
              <p>{post.title.rendered}</p>
            ))}
          </>
        }
      </Layout>
    )
  }
}




export default HaleyPage




