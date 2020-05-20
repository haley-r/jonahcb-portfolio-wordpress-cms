import React, { Component } from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"

import {endPoint, wpAPI} from '../data/api';

class HaleyPage extends Component {
  componentDidMount() {
    console.log('hi, haley page mounted');
    fetch('http://demo.wp-api.org/wp-json/wp/v2/posts')
    .then(results => results.json())
    .then(data => console.log('woohoo'))
    .catch(error => console.log('something went wrong while fetching posts', error));
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




