import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../components/css/Header.css'

function Header1() {
  return (
    <div className="w3-bar w3-teal w3-wide w3-padding w3-card">
          <a href="/" className="w3-bar-item w3-button"><b>Payment</b> Wallet</a>
          <div className="w3-right w3-hide-small">
            <a href="/validate" className="w3-bar-item w3-button">Logout</a>
          </div>
        </div> 
  )
}

export default Header1