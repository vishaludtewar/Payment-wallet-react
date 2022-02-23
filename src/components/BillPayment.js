import React, { Component } from 'react'
import '../components/css/Wallet.css'
import { Link } from 'react-router-dom'

export class BillPayment extends Component {
  render() {
    return (
        <div className='wallet-main'>
        <p className='wallet-title'>Welcome To BillPayment</p>
        <p className='wallet-service'>BillPayment Service</p>
        <a href='/wallet/extra/billpayment/add' id='bt1' className='btn btn-info btn-lg'>Add</a>
        <a href='/wallet/extra/billpayment/view' id='bt3' className='btn btn-info btn-lg'>View</a>
        <a id='ex1' className='btn btn-primary btn-lg' href='/wallet/extra'>BACK</a>
        </div>
    )
  }
}

export default BillPayment