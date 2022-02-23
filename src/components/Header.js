import React, { Component } from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../components/css/Header.css'

export class Header extends Component {

    login=(props)=>{
      this.props.history.push("/validate");
    }

    render() {
    return (      
     <div className="w3-bar w3-teal w3-wide w3-padding w3-card">
          <a href="/" className="w3-bar-item w3-button"><b>Payment</b> Wallet</a>
          <div className="w3-right w3-hide-small">
          </div>
        </div> 
    )
  }
}

export default Header