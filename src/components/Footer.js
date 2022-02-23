import React, { Component } from 'react'
import '../components/css/Header.css'

export class Footer extends Component {
  render() {
    return (
      <div className="w3-bottom">
      <div className="w3- w3-teal w3-wide w3-padding w3-card">
      <a id='about' href='https://www.linkedin.com' className="w3-right-align">about us!</a>
      <p id='rights' className="w3-right-align">All rights reserved @capgemini</p>
        <div className="w3-right w3-hide-small">
        </div>
      </div>
    </div>
    )
  }
} 

export default Footer