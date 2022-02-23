import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../components/css/Wallet.css'
export class WalletComponent extends Component {
  render() {
    return (
    <div className='wallet-main'>
    <p className='wallet-title'>Welcome To Wallet</p>
    <p className='wallet-service'>Wallet Services</p>
    <Link to='/wallet/updatewallet' id='bt1' className='btn btn-info btn-lg'>Update Account</Link>
    <Link to='/wallet/addmoney' id='bt2' className='btn btn-info btn-lg'>Add Money</Link >
    <Link to='/wallet/depositmoney' id='bt3' className='btn btn-info btn-lg'>Deposit Money</Link >
    <Link to='/wallet/addwallet' id='bt4' className='btn btn-info btn-lg'>Add Wallet</Link >
    <Link to='/wallet/transfer' id='bt5' className='btn btn-info btn-lg'>Transfer amount</Link >
    <Link to='/wallet/balance' id='bt6' className='btn btn-info btn-lg'>Check Balance</Link >
    <Link to='/wallet/extra' id='bt7' className='btn btn-info btn-lg'>Extra Services</Link >
    </div>
    )
  }
}

export default WalletComponent