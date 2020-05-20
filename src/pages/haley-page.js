import React, { Component } from 'react';
import axios from 'axios';
import Layout from "../components/layout"
import SEO from "../components/seo"

// import {endPoint, wpAPI} from '../data/api'

// console.log(wpAPI.posts);

class HaleyPage extends Component {
  componentDidMount() {
    console.log('hi, haley page mounted');
    fetch('https://cometlot.com/wp-json/wp/v2/posts')
    .then(results => results.json())
    .then(data => console.log(data))
    .catch(error => console.log('something went wrong while fetching posts', error));
    // axios({
    //   method: 'get',
    //   url: "http://demo.wp-api.org/wp-json/wp/v2/posts",
    //   config: {
    //     headers: {
    //       'Access-Control-Allow-Origin': '*',
    //     }
    //   }
    // })
    // .then(results => results.json())
    // .then(data => {
    //   console.log
    // })
  
  }

  render() {
    return (
      <Layout>
        <SEO title="TEST" />
        <h1>Haley Page</h1>
        <p>Try the WP API stuff here!</p>
      </Layout>
    )
  }
}




export default HaleyPage




