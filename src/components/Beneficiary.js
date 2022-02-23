import React, { Component } from 'react'
import '../components/css/Wallet.css'
import { Link } from 'react-router-dom'


export class Beneficiary extends Component {
  render() {
    return (
    <div className='wallet-main'>
    <p className='wallet-title'>Welcome To Beneficiary</p>
    <p className='wallet-service'>Beneficiary Services</p>
    <Link to='/wallet/extra/beneficiary/add-delete' id='bt1' className='btn btn-info btn-lg'>Add Delete Beneficiary</Link>
    <Link to='/wallet/extra/beneficiary/view' id='bt3' className='btn btn-info btn-lg'>View</Link>
    <Link to='/wallet/extra/beneficiary/viewall' id='bt4' className='btn btn-info btn-lg'>View All</Link>
    <Link id='ex1' className='btn btn-primary btn-lg' to='/wallet/extra'>BACK</Link>
    </div>
    )
  }
}

export default Beneficiary