import React, { Component } from 'react'
import '../components/css/Wallet.css'
import { Link } from 'react-router-dom'

export class Transaction extends Component {
  render() {
    return (
      <div className='wallet-main'>
        <p className='wallet-title'>Welcome To Transaction</p>
        <p className='trans-service'>Transaction Services</p>
        <Link to='/wallet/extra/transaction/add' id='btr1' className='btn btn-info btn-lg'>Add Transaction</Link >
        <Link to='/wallet/extra/transaction/viewById' id='btr2' className='btn btn-info btn-lg'>View by Id</Link >
        <Link to='/wallet/extra/transaction/viewByType' id='btr3' className='btn btn-info btn-lg'>View by Type</Link >
        <Link to='/wallet/extra/transaction/ViewBetDates' id='btr4' className='btn btn-info btn-lg'>View between Dates</Link >
        <Link id='btr5' className='btn btn-primary btn-lg' to='/wallet/extra'>BACK</Link >
      </div>
    )
  }
}

export default Transaction