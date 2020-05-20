import React, { Component } from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"

class HaleyPage extends Component {
  componentDidMount() {
    console.log('hi, haley page mounted');
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Haley Page</h1>
        <p>Try the WP API stuff here!</p>
      </Layout>
    )
  }
}



export default HaleyPage




