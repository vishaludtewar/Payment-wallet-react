import React, { Component } from 'react'
import '../components/css/Wallet.css'
import { Link } from 'react-router-dom'

export class BankAccount extends Component {
  render() {
    return (
        <div className='wallet-main'>
    <p className='wallet-title'>Welcome To BankAccount</p>
    <p className='wallet-service'>BankAccount Services</p>
    <Link to='/wallet/extra/bank/addaccount' id='bt1' className='btn btn-info btn-lg'>Add</Link>
    <Link to='/wallet/extra/bank/delete' id='bt2' className='btn btn-info btn-lg'>Delete</Link>
    <Link to='/wallet/extra/bank' id='bt3' className='btn btn-info btn-lg'>View</Link>
    <Link to='/wallet/extra/bank/viewall' id='bt4' className='btn btn-info btn-lg'>View All</Link>
    <Link id='ex1' className='btn btn-primary btn-lg' to='/wallet/extra'>BACK</Link>
    </div>
    
    )
  }
}

export default BankAccount